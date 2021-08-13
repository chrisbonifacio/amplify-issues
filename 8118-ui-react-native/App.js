// Put your code below this line.

import 'react-native-gesture-handler';

import React from 'react';
import Amplify from 'aws-amplify';
import {StyleSheet, Text, View} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

import config from './src/aws-exports';

Amplify.configure(config);

const styles = StyleSheet.create({
  container: {
    width: '100px',
    alignSelf: 'stretch',
    textAlign: 'center',
    flex: 1,
  },
});

const App = function () {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  );
};

export default withAuthenticator(App, {signUpConfig: {}});
