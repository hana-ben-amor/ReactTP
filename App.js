import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './screens/Auth';
import NewUser from './screens/NewUser';
import Accueil from './screens/Accueil';

const Stack = createNativeStackNavigator();

export default function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Auth" component={Auth} ></Stack.Screen>
        <Stack.Screen options={{headerShown:true}}  name="NewUser" component={NewUser}></Stack.Screen>
        <Stack.Screen name="Accueil"  component={Accueil} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


