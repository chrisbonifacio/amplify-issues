/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify';
import PushNotification from '@aws-amplify/pushnotification';
import {PushNotificationIOS} from '@react-native-community/push-notification-ios';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => App);
