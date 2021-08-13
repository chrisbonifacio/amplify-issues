import { useEffect, useState } from "react";
import Head from "next/head";
import {
  Amplify,
  Auth,
  DataStore,
  AuthModeStrategyType,
  withSSRContext,
} from "aws-amplify";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { serializeModel, deserializeModel } from "@aws-amplify/datastore/ssr";

import { PrivateNote } from "../src/models";
import awsExports from "../src/aws-exports";
import styles from "../styles/Home.module.css";

Amplify.configure({
  ...awsExports,
  DataStore: {
    authModeStrategyType: AuthModeStrategyType.MULTI_AUTH,
  },
  ssr: true,
});

async function handleCreatePrivateNote(e) {
  e.preventDefault();

  const form = new FormData(e.target);

  // const res = await fetch("/api/notes", {
  //   method: "POST",
  //   credentials: "include",
  //   body: JSON.stringify({ content: form.get("content") }),
  // });

  const res = await DataStore.save(
    new PrivateNote({ content: form.get("content") })
  );

  console.log(res);
}

export default function Home() {
  const [privateNotes, setPrivateNotes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await DataStore.query(PrivateNote);
      console.log(res);

      setPrivateNotes(res);
    })();

    const subscription = DataStore.observe(PrivateNote).subscribe({
      next: ({ opType, element }) => {
        switch (opType) {
          case "INSERT":
            setPrivateNotes((prev) => [...prev, element]);
        }
      },
      error: (err) => console.log(error),
      complete: () => console.log("observation complete"),
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Amplify + Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Amplify + Next.js</h1>

        <p className={styles.description}>
          <code className={styles.code}>{privateNotes?.length}</code>
          privateNotes
        </p>

        <div className={styles.grid}>
          {privateNotes?.map((privateNote) => (
            <a
              className={styles.card}
              href={`/privateNotes/${privateNote.id}`}
              key={privateNote.id}
            >
              <p>{privateNote.content}</p>
            </a>
          ))}

          <div className={styles.card}>
            <h3 className={styles.title}>New Note</h3>

            <AmplifyAuthenticator>
              <form onSubmit={handleCreatePrivateNote}>
                <fieldset>
                  <legend>Content</legend>
                  <textarea
                    style={{ width: "100%" }}
                    type="text"
                    defaultValue="I built an Amplify app with Next.js!"
                    name="content"
                  />
                </fieldset>

                <button type="submit">Create Note</button>
                <button type="button" onClick={() => Auth.signOut()}>
                  Sign out
                </button>
              </form>
            </AmplifyAuthenticator>
          </div>
        </div>
      </main>
    </div>
  );
}

// export async function getServerSideProps({ req }) {
//   const { DataStore } = withSSRContext({ req });
//   const privateNotes = await DataStore.query(PrivateNote);

//   console.log(privateNotes);

//   return {
//     props: {
//       privateNotes: serializeModel(privateNotes),
//     },
//   };
// }
