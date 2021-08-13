import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  AppState,
  TextInput,
} from "react-native";
import { Amplify, Auth, Hub } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "./src/aws-exports";
Amplify.configure(config);

const initialCreds = { username: "", password: "" };

export function App() {
  const appState = React.useRef(AppState.currentState);
  const [creds, setCreds] = React.useState(initialCreds);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const checkAsyncStorage = async () => {
    let storage = {};

    try {
      const keys = await AsyncStorage.getAllKeys();

      for (let key of keys) {
        const value = await AsyncStorage.getItem(key);
        storage[key] = value;
      }
    } catch (error) {
      console.error(error);
    }

    Object.keys(storage).length
      ? console.table(storage)
      : console.log("Storage is empty");
  };

  const _handleAppStateChange = async (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
      await checkAsyncStorage();
    }

    appState.current = nextAppState;
    console.log("AppState", appState.current);
  };

  const signIn = async () => {
    const { username, password } = creds;
    try {
      await Auth.signIn({ username, password });
      setLoggedIn(true);
    } catch (error) {
      console.error(error);
    } finally {
      setCreds(initialCreds);
    }
  };

  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log("signed out");
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (!loggedIn) {
      Auth.currentAuthenticatedUser()
        .then((user) => {
          setLoggedIn(true);
        })
        .catch((err) => console.error(err));
    }

    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  return (
    <>
      {!loggedIn ? (
        <View style={styles.container}>
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              padding: 10,
              borderColor: "#000",
              borderRadius: 5,
              marginBottom: 10,
            }}
            placeholder="Email"
            onChangeText={(text) =>
              setCreds((prev) => ({ ...prev, username: text }))
            }
          />
          <TextInput
            style={{
              height: 40,
              width: 200,
              borderWidth: 1,
              padding: 10,
              borderColor: "#000",
              borderRadius: 5,
              marginBottom: 10,
            }}
            placeholder="Password"
            onChangeText={(text) =>
              setCreds((prev) => ({ ...prev, password: text }))
            }
          />
          <Button title="Sign In" onPress={signIn} />
        </View>
      ) : (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <StatusBar style="auto" />
          <Button title="Sign Out" onPress={signOut} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default withAuthenticator(App);
