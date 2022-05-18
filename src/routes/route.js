import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../pages/login/Login';
import { NewAccount } from '../pages/NewAccount';

const Stack = createNativeStackNavigator();

export function Route (){
    return (
        <Stack.Navigator>
            <Stack.Screen name = "Login" options={{headerShown: false}} component = {Login} />
            <Stack.Screen name = "NewAccount" options={{headerShown: false}} component = {NewAccount}/>
        </Stack.Navigator>
    );
}