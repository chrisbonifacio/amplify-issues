import { SyntheticEvent, useEffect, useState } from "react";
import { API, graphqlOperation } from "@aws-amplify/api";
import { listBusinesses } from "./graphql/queries";
import {
  onCreateBusiness,
  onUpdateBusinessByID,
} from "./graphql/subscriptions";
import {
  createBusiness,
  deleteBusiness,
  updateBusiness,
} from "./graphql/mutations";
import {
  Business,
  ListBusinessesQuery,
  OnCreateBusinessSubscription,
  OnUpdateBusinessByIDSubscription,
} from "./API";
import { Observable } from "./../node_modules/zen-observable-ts";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [businesses, setBusinesses] = useState<Array<Business>>([]);

  const getBusinesses = async () => {
    try {
      const res = (await API.graphql(graphqlOperation(listBusinesses))) as {
        data: ListBusinessesQuery;
      };
      setBusinesses(res?.data?.listBusinesses?.items as Array<Business>);
    } catch (error) {
      console.error(error);
    }
  };

  const saveBusiness = async (e: SyntheticEvent) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget as HTMLFormElement);
    const input = {
      name: form.get("name"),
      owner: "chris",
      status: "ACTIVE",
    };

    try {
      await API.graphql(graphqlOperation(createBusiness, { input }));
    } catch (error) {
      console.error(error);
    }
  };

  const removeBusiness = async (id: string) => {
    const input = { id };

    try {
      await API.graphql(graphqlOperation(deleteBusiness, { input }));
      setBusinesses((prev) => prev.filter((b) => b.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const editBusiness = async (id: string) => {
    const input = { id, name: "Edited Business Again" };

    try {
      await API.graphql(graphqlOperation(updateBusiness, { input }));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBusinesses();

    const createBusinessClient = API.graphql(
      graphqlOperation(onCreateBusiness)
    ) as Observable<object>;

    const createBusinessSub = createBusinessClient.subscribe({
      next: (payload: {
        provider: any;
        value: { data: OnCreateBusinessSubscription };
      }) => {
        console.log(payload);
        setBusinesses(
          (prev) =>
            [...prev, payload?.value?.data?.onCreateBusiness] as Array<Business>
        );
      },
      error: (error: any) => console.error(error),
    });

    return () => {
      createBusinessSub?.unsubscribe();
    };
  }, []);

  useEffect(() => {
    let editByIDSub: any;

    if (businesses.length) {
      const editByIDClient = API.graphql(
        graphqlOperation(onUpdateBusinessByID, {
          id: businesses?.[0]?.id,
        })
      ) as Observable<object>;

      editByIDSub = editByIDClient.subscribe({
        next: (payload: {
          provider: any;
          value: { data: OnUpdateBusinessByIDSubscription };
        }) => {
          const index = businesses.findIndex(
            (business) =>
              business.id === payload.value?.data?.onUpdateBusinessByID?.id
          );
          const newBusinesses: Array<Business> = [...businesses];
          newBusinesses[index] = payload?.value?.data
            ?.onUpdateBusinessByID as Business;
          setBusinesses(newBusinesses);
        },
        error: (error: any) => console.error(error),
      });
    }

    return () => {
      editByIDSub?.unsubscribe();
    };
  }, [businesses]);

  return (
    <div className="App-header">
      <header className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <br />
      <main>
        <form onSubmit={saveBusiness}>
          <fieldset>
            <legend>Create Business</legend>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            <input type="submit" value="submit" />
          </fieldset>
        </form>

        <h2>Businesses</h2>
        <ul>
          {businesses.map((business) => (
            <li key={business?.id}>
              {business?.name}
              <button onClick={() => editBusiness(business.id)}>Edit</button>
              <button onClick={() => removeBusiness(business.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
