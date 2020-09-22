/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar, useColorScheme} from 'react-native';

export default function App(): React.ReactElement {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? 'black' : 'white';
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{flex: 1, backgroundColor: bgColor, justifyContent: 'center'}}>
        <Text style={{color: textColor, fontSize: 20, alignSelf: 'center'}}>
          {colorScheme}
        </Text>
      </SafeAreaView>
    </>
  );
}
