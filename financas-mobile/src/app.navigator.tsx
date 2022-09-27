import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './pages/Home';
import { AddCash } from './pages/AddCash';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (

    <NavigationContainer>
        <Stack.Navigator initialRouteName="AddCash" >
            <Stack.Screen options={{  headerShown: false }} name="Home" component={Home} />
            <Stack.Screen name="AddCash" options={{  headerShown: false }} component={AddCash} />
        </Stack.Navigator>
    </NavigationContainer>


)
export default AppNavigator;