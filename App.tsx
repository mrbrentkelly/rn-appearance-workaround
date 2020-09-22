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
import {SafeAreaView, Text, StatusBar, Button} from 'react-native';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import NightModeModule from './NightModeModule';

function MyComponent(): React.ReactElement {
  const colorScheme = useColorScheme();
  const bgColor = colorScheme === 'dark' ? 'black' : 'white';
  const textColor = colorScheme === 'dark' ? 'white' : 'black';

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: 'space-evenly',
        padding: 20,
      }}>
      <Text style={{color: textColor, fontSize: 20, alignSelf: 'center'}}>
        {colorScheme}
      </Text>
      <Button
        title="Set night mode yes"
        onPress={NightModeModule.setNightModeYes}
      />
      <Button
        title="Set night mode no"
        onPress={NightModeModule.setNightModeNo}
      />
    </SafeAreaView>
  );
}

export default function App(): React.ReactElement {
  return (
    <AppearanceProvider>
      <StatusBar barStyle="dark-content" />
      <MyComponent />
    </AppearanceProvider>
  );
}
