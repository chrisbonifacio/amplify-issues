import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {Auth} from 'aws-amplify';
import VerifyTotpToken from './VerifyTotpToken';

const initialState = {username: '', code: ''};

const ConfirmSignUp = ({user, onSignUp}) => {
  const [formState, setFormState] = useState(initialState);

  async function confirmSignUp() {
    const {username, code} = formState;
    try {
      await Auth.confirmSignUp(username, code);
      onSignUp();
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
        onChangeText={val => setInput('code', val)}
        style={styles.input}
        value={formState.code}
        placeholder="Code"
      />
      <Button title="Confirm Sign Up" onPress={confirmSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  user: {marginBottom: 15},
  input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
  userName: {fontSize: 18},
});

export default ConfirmSignUp;
