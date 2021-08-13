import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import {Auth} from 'aws-amplify';

const initialState = {token: ''};

const VerifyTotpToken = ({user, onVerify}) => {
  const [totpToken, setTotpToken] = useState('');
  const [formState, setFormState] = useState(initialState);

  async function getTotpToken() {
    try {
      const token = await Auth.setupTOTP(user);
      setTotpToken(token);
      console.log({token});
    } catch (error) {
      console.log(error);
    }
  }

  async function verifyTotpToken() {
    const {token} = formState;
    try {
      const verifiedToken = await Auth.verifyTotpToken(user, token);
      console.log({verifiedToken});
      onVerify();
    } catch (error) {
      console.log(error);
    }
  }

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  return (
    <View style={styles.container}>
      <Text>Token: {totpToken}</Text>
      <TextInput
        onChangeText={val => setInput('token', val)}
        style={styles.input}
        value={formState.token}
        placeholder="Token"
      />
      <Button title="Get TOTP Token" onPress={getTotpToken} />
      <Button title="Verify TOTP Token" onPress={verifyTotpToken} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  user: {marginBottom: 15},
  input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
  userName: {fontSize: 18},
});

export default VerifyTotpToken;
