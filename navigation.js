import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'

// screens

import HomeScreen from './screens/homeScreen';
import SettingScreen from './screens/settingScreen';
import StackScreen from './screens/stackScreen'

// icons

import { Entypo, Feather } from '@expo/vector-icons';


const HomeStackNavigator = createNativeStackNavigator()

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen" >
            <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
            <HomeStackNavigator.Screen name="Stack" component={StackScreen} />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator(); // guardamos en una constante las tabs

function MyTabs () { // en una function creamos las tabs dentro de la constante donde estan las tabs
    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={{ tabBarActiveTintColor: "purple" }} >
            <Tab.Screen name="Home" component={MyStack} options={{tabBarIcon: ({ color, size }) => ( <Entypo name="home" size={24} color={color} /> ), headerShown: false, tabBarBadge: 10  }} />
            <Tab.Screen name="Setting" component={SettingScreen} options={{tabBarIcon: ({color, size}) => (<Feather name="settings" size={24} color={color} />) }} />
        </Tab.Navigator>
    )
}

//exportamos una funcion con las tabs dentro de NavigationContainer

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}