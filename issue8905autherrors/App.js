/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Auth} from '@aws-amplify/auth';

Auth.configure({
  userPoolId: 'us-east-1_76GjwKnsA',
  userPoolWebClientId: '2pf5d8ga223dmbp9devcv98pmd',
  identityPoolId: 'us-east-1:aa6288a1-8b22-4da3-9857-ad8298ac9587',
  region: 'us-east-1',
  federatedTarget: 'COGNITO_USER_POOLS',
  authenticationFlowType: 'USER_PASSWORD_AUTH',
});

const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const [result, setResult] = useState(null);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const signIn = async () => {
    let result;
    try {
      // result = await Auth.signIn({
      //   username: 'chris',
      //   password: 'test1234',
      //   attributes: {
      //     email: 'christopher.bonifacio+test@gmail.com',
      //   },
      // });

      // result = await Auth.confirmSignUp('chris', '095188');

      result = await Auth.signIn('chris', 'test');
    } catch (err) {
      console.log('error signing up', err);
      result = err;
    }
    setResult(result);
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Sign In">
            <Button title="Click Here to sign in" onPress={signIn} />
          </Section>
          <Section title="Result">
            <Text>{JSON.stringify(result, null, 2)}</Text>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
