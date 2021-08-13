import React from 'react';
import {Auth} from 'aws-amplify';
import {Button} from 'react-native';

const GetCurrentUser = () => {
  async function getCurrentUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log({user});
    } catch (error) {
      console.log(error);
    }
  }
  return <Button title="Get Current User" onPress={getCurrentUser} />;
};

export default GetCurrentUser;
