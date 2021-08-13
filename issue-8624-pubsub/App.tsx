import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Amplify, Auth, PubSub, Hub } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import {
  MqttOverWSProvider,
  AWSIoTProvider,
} from "@aws-amplify/pubsub/lib/Providers";
import awsconfig from "./src/aws-exports";

// PubSub Repo

Amplify.configure(awsconfig);
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "us-east-1",
    aws_pubsub_endpoint:
      "wss://a29i25f9xsgw8a-ats.iot.us-east-1.amazonaws.com/mqtt",
  })
);

export function App() {
  const [input, setInput] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const signOut = async () => {
    try {
      await Auth.signOut();
      console.log("signed out");
      setLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  const publishTopic = async () => {
    try {
      await PubSub.publish("test", {
        msg: input,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const listener = (capsule: any) => {
    if (capsule.payload.event === "signIn") {
      console.log("signed in");
      setLoggedIn(true);
    }
    if (capsule.payload.event === "signOut") {
      console.log("signed out");
      setLoggedIn(false);
    }
  };

  React.useEffect(() => {
    Hub.listen("auth", listener);

    return () => Hub.remove("auth", listener);
  }, []);

  React.useEffect(() => {
    let sub: any;

    if (loggedIn) {
      sub = PubSub.subscribe("test").subscribe({
        start: () => console.log("subscribed to test topic"),
        next: (data) => {
          console.log(data.value);
          setMessage(data.value.msg);
        },
        error: (error) => console.error(error),
      });
    } else {
      Auth.currentAuthenticatedUser()
        .then(() => {
          console.log("signed in");
          setLoggedIn(true);
        })
        .catch((err) => {
          console.log("signed out");
          setLoggedIn(false);
          sub?.unsubscribe();
        });
    }

    return () => {
      sub?.unsubscribe();
    };
  }, [loggedIn]);

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
      <StatusBar style="auto" />

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
        placeholder="Message"
        onChangeText={(text) => setInput(text)}
      />
      <Button title="Publish Test" onPress={publishTopic} />
      <Button title="Sign Out" onPress={signOut} />
    </View>
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
