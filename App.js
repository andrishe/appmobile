import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './src/screens/auth/Onboarding';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';




const Stack = createNativeStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen  name='Oboarding' component={Onboarding}/>
      <Stack.Screen  name='Signin' component={Signin}/>
      <Stack.Screen  name='Signup' component={Signup}/>
    </Stack.Navigator>

  </NavigationContainer>

  ); 
};

export default App;
