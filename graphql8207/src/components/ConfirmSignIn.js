import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

import {Auth} from 'aws-amplify';

const initialState = {code: ''};

const ConfirmSignIn = ({user, onConfirmSignIn}) => {
  const [formState, setFormState] = useState(initialState);

  async function confirmSignIn() {
    const {code} = formState;
    try {
      const confirmedSignIn = await Auth.confirmSignIn(
        user,
        code,
        'SOFTWARE_TOKEN_MFA',
      );
      console.log({confirmedSignIn});
      onConfirmSignIn();
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
        onChangeText={val => setInput('code', val)}
        style={styles.input}
        value={formState.code}
        placeholder="Code"
      />
      <Button title="Confirm Sign Up" onPress={confirmSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  user: {marginBottom: 15},
  input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
  userName: {fontSize: 18},
});

export default ConfirmSignIn;
