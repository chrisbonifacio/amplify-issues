import React from 'react';
import {SafeAreaView, StyleSheet, Platform, Text, View} from 'react-native';

import {Analytics} from '@aws-amplify/analytics';
import {Amplify} from 'aws-amplify';
import PushNotification from '@aws-amplify/pushnotification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import awsconfig from './src/aws-exports';

Amplify.Logger.LOG_LEVEL = 'DEBUG';

Amplify.configure(awsconfig);
PushNotification.configure(awsconfig);

PushNotification.onRegister(async token => {
  console.log('in app registration', token);
  PushNotification.updateEndpoint(token);
});

PushNotification.onNotification(notification => {
  console.log('in app notification', notification);
  if (Platform.OS === 'ios') {
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  }
});

PushNotification.onNotificationOpened(notification => {
  console.log('the notification is opened', notification);
});

const endpointId = Analytics.getPluggable('AWSPinpoint')._config.endpointId;
console.log('endpoint ID:', endpointId);

if (Platform.OS === 'ios') {
  PushNotification.requestIOSPermissions();
}

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.bigBlue}>Push Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    display: 'flex',
    paddingTop: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
