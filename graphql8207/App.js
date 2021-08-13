import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

import Amplify, {Auth, API, graphqlOperation} from 'aws-amplify';

import {createUser} from './src/graphql/mutations';
import {listUsers} from './src/graphql/queries';

import awsconfig from './src/aws-exports';
import ConfirmSignUp from './src/components/ConfirmSignUp';
import SignIn from './src/components/SignIn';
import VerifyTotpToken from './src/components/VerifyTotpToken';
import ConfirmSignIn from './src/components/ConfirmSignIn';
import GetCurrentUser from './src/components/GetCurrentUser';

Amplify.configure(awsconfig);

const initialState = {username: '', email: '', password: ''};

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [authState, setAuthState] = useState('signIn');

  function setInput(key, value) {
    setFormState({...formState, [key]: value});
  }

  async function signUp() {
    try {
      const user = {...formState};
      setFormState(initialState);
      await Auth.signUp({
        username: user.username,
        password: user.password,
        attributes: {email: user.email},
      });
      setAuthState('confirmSignUp');
    } catch (err) {
      console.log('error creating user:', err);
    }
  }

  async function fetchUsers() {
    const email = 'christopher.bonifacio@gmail.com';
    try {
      const users = await API.graphql(graphqlOperation(listUsers), {
        filter: {email: {eq: email}},
      });
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    try {
      await Auth.signOut();
      console.log({signedOut: true});
      setAuthState('signIn');
    } catch (error) {
      console.log({signedOut: false, error});
    }
  }

  if (authState === 'confirmSignUp') {
    return (
      <>
        <ConfirmSignUp onSignUp={() => setAuthState('signIn')} />
        <GetCurrentUser />
      </>
    );
  }

  if (authState === 'signIn') {
    return (
      <>
        <SignIn
          onSignIn={user => {
            setUser(user);

            if (user.challengeName === 'MFA_SETUP') {
              setAuthState('setupMFA');
            } else {
              setAuthState('confirmSignIn');
            }
          }}
        />
        <GetCurrentUser />
      </>
    );
  }

  if (authState === 'confirmSignIn') {
    return (
      <>
        <ConfirmSignIn
          user={user}
          onConfirmSignIn={() => setAuthState('signedIn')}
        />
        <GetCurrentUser />
      </>
    );
  }

  if (authState === 'setupMFA') {
    return (
      <>
        <VerifyTotpToken
          user={user}
          onVerify={() => setAuthState('signedIn')}
        />
        <GetCurrentUser />
      </>
    );
  }

  if (authState === 'signedIn') {
    return (
      <View style={styles.container}>
        {users?.map(user => (
          <View>
            <Text>
              {user.first_name} {user.last_name}
            </Text>
          </View>
        ))}
        <Button title="Sign Out" onPress={signOut} />
        <GetCurrentUser />
      </View>
    );
  }

  if (authState === 'signUp') {
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={val => setInput('username', val)}
          style={styles.input}
          value={formState.name}
          placeholder="Username"
        />
        <TextInput
          onChangeText={val => setInput('email', val)}
          style={styles.input}
          value={formState.email}
          placeholder="Email"
        />
        <TextInput
          secureTextEntry
          onChangeText={val => setInput('password', val)}
          style={styles.input}
          value={formState.password}
          placeholder="Password"
        />
        <Button title="Sign Up" onPress={signUp} />
        <GetCurrentUser />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
  user: {marginBottom: 15},
  input: {height: 50, backgroundColor: '#ddd', marginBottom: 10, padding: 8},
  userName: {fontSize: 18},
});

export default App;
