// import { useEffect } from "react";
import { Amplify, Auth, Hub } from "aws-amplify";
import { signIn, signOut, useSession } from "next-auth/client";
import awsconfig from "../src/aws-exports";

Amplify.configure({ ...awsconfig });
export default function Page() {
  const [session, loading] = useSession();

  // const amplifySignIn = async () => {
  //   Auth.signIn({ username: "chris", password: "Hello123" });
  // };

  // const hubListener = async (data) => {
  //   console.log(data);
  //   const {
  //     payload: { event },
  //   } = data;

  //   switch (event) {
  //     case "signIn":
  //       signIn("Credentials", { username: "chris", password: "Hello123" });
  //   }
  // };

  // useEffect(() => {
  //   Hub.listen("auth", hubListener);

  //   return () => {
  //     Hub.remove("auth", hubListener);
  //   };
  // }, []);

  return (
    <>
      {!session && (
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}
      {session && (
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
      )}
    </>
  );
}
