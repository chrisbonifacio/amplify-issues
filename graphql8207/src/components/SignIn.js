import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {Auth} from 'aws-amplify';

const initialState = {username: '', password: ''};

const SignIn = ({onSignIn}) => {
  const [formState, setFormState] = useState(initialState);

  async function signIn() {
    const {username, password} = {...formState};
    try {
      const user = await Auth.signIn(username, password);
      console.log({user});
      onSignIn(user);
    } catch (error) {
      console.log(error);
    }
  }

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={val => setInput('username', val)}
        style={styles.input}
        value={formState.username}
        placeholder="Username"
      />

      <TextInput
        secureTextEntry
        onChangeText={val => setInput('password', val)}
        style={styles.input}
        value={formState.password}
        placeholder="Password"
      />
      <Button title="Sign In" onPress={signIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  user: {marginBottom: 15},
  input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
  userName: {fontSize: 18},
});

export default SignIn;
