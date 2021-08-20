import React, { useEffect, useState } from "react";
import Button from "reactstrap/lib/Button";
import { DataStore } from "@aws-amplify/datastore";
import { Hub, withSSRContext } from "aws-amplify";
import { Program, User } from "../src/models";

export async function getServerSideProps(context) {
  const { Auth, DataStore } = withSSRContext(context);
  let user = null;
  let isAuthenticated = false;
  let dataStoreUser = null;

  try {
    const { attributes } = await Auth.currentAuthenticatedUser();
    if (attributes) {
      user = JSON.parse(JSON.stringify(attributes));
      isAuthenticated = true;
    } else {
      console.log("User is not logged in.");
      isAuthenticated = false;
      user = null;
    }
  } catch (error) {
    console.log("Error getting user: ", error);
  }
  if (user !== null && user !== undefined) {
    try {
      const dataStoreUserQuery = await DataStore.query(User, (userData) =>
        userData.username("eq", user.email)
      );
      console.log("DataStore user: ", dataStoreUserQuery[0]);
      dataStoreUser = JSON.parse(JSON.stringify(dataStoreUserQuery[0]));
    } catch (error) {
      console.log(
        "Error getting the DataStore User from getServerSideProps: ",
        error
      );
    }
  }
  return {
    props: {
      user: user,
      isAuthenticated: isAuthenticated,
      dataStoreUser: dataStoreUser,
    },
  };
}

export default function Home() {
  const getUser = async () => {
    try {
      console.log(DataStore);
      const dataStoreUser = await DataStore.query(User);
      console.log("User: ", dataStoreUser);
      setDataStoreUser(dataStoreUser);
      const anyProgram = await DataStore.query(Program);
      console.log("Program: ", anyProgram);
    } catch (error) {
      console.log("error getting datastoreuser: ", error);
    }
  };
  function handleClick(event) {
    event.preventDefault();
    console.log("Clicked");
    getUser();
  }

  return (
    <>
      <div>
        <div style={{ minHeight: "100px" }}></div>
        <Button className="mt-5" onClick={handleClick}>
          Get User
        </Button>
      </div>
    </>
  );
}
