import * as React from 'react';
import { StyleSheet, View, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './src/profilScreen';
import SignInScreen from './src/signInScreen';
import HomeScreen from './src/homeScreen';
import MyDrawer from './src/drawerScreen';

const Stack = createNativeStackNavigator();


function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Sign in" component={SignInScreen} />
        <Stack.Screen name="Drawer" component={MyDrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;

