import React from 'react';
import {Button, Text, View} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';
import withAuthenticatorConfig from './authConfig';

function App() {
  const signOut = async () => {
    await Auth.signOut();
  };
  return (
    <View style={customStyles}>
      <Text>Homepage</Text>
      <Button onPress={signOut} title="Sign Out" />
    </View>
  );
}

export default withAuthenticator(App, withAuthenticatorConfig);

const customStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
};
