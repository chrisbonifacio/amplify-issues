// Put your code below this line.
import React from "react";
import { AmplifyAuthenticator } from "@aws-amplify/ui-react";
import { Auth, Storage } from "aws-amplify";

function App() {
  const logOut = async () => {
    console.log(`Logging out`);
    try {
      await Auth.signOut();
      console.log("Logged out");
    } catch (error) {
      console.log(`Error logging out: ${error}`);
    }
  };

  const getStuff = async () => {
    console.log("get");
    try {
      const fileResponse = await Storage.get("test.txt");
      console.log(fileResponse);
    } catch (error) {
      console.error("error happened", error);
    }
  };

  const listStuff = async () => {
    console.log("list");
    try {
      const fileResponse = await Storage.list("/");
      setImages(fileResponse);
    } catch (error) {
      console.error("error happened", error);
    }
  };
  const putStuff = async () => {
    console.log("put");
    try {
      const fileResponse = await Storage.put("test5.txt", "test2.txt");
      console.log(fileResponse);
    } catch (error) {
      console.error("error happened", error);
    }
  };

  return (
    <AmplifyAuthenticator hideSignUp={true}>
      <button onClick={putStuff}>Put</button>
      <button onClick={getStuff}>Get</button>
      <button onClick={listStuff}>List</button>

      <button onClick={logOut}>Log Out</button>
    </AmplifyAuthenticator>
  );
}

export default App;
