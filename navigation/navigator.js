import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import {HomeScreen} from "../screens/HomeScreen";
import {SettingsScreen} from "../screens/SettingsScreen";
import {AboutScreen} from "../screens/AboutScreen";
import {NewsScreen} from "../screens/NewsScreen";

import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createStackNavigator();

export function MyStack(){
  return(
    
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={HomeScreen}
        options={{title: "Home Screen"}}
        />
        <Stack.Screen 
        name="Settings"
        component={SettingsScreen}
        options={{title: "Settings Screen"}}
        />
        <Stack.Screen 
        name="About"
        component={AboutScreen}
        options={{title: "About Screen"}}
        />
        <Stack.Screen 
        name="News"
        component={NewsScreen}
        options={{title: "News Screen"}}
        />
      </Stack.Navigator>
    
  )
}

const Tab = createBottomTabNavigator();

export function TabNavigator(){
  return(
  <NavigationContainer>
  <Tab.Navigator
          screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "settings" : "settings-outline";
            } else if (route.name === "About") {
              iconName = focused ? "apps" : "apps-outline";
            } else if (route.name === "News") {
              iconName = focused ? "book" : "book-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
        >
    <Tab.Screen 
    name="Home"
    component={HomeScreen}
    options={{
      headerTitle: "HOME",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 18,
        color: "green"
      },
      headerStyle: {
        borderBottomColor: "grey",
        borderBottomWidth: 0.2
      },
      title: "HOME",
      tabBarStyle: {
      paddingTop: 10,
      },
    }}
    />
    <Tab.Screen 
    name="Settings"
    component={SettingsScreen}
    options={{
      headerTitle: "SETTINGS",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 18,
        color: "green"
      },
      headerStyle: {
        borderBottomColor: "grey",
        borderBottomWidth: 0.2
      },
      title: "SETTINGS",
      tabBarStyle: {
      paddingTop: 10,
      },
    }}
    />
    <Tab.Screen 
    name="About"
    component={AboutScreen}
    options={{
      headerTitle: "ABOUT",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 18,
        color: "green"
      },
      headerStyle: {
        borderBottomColor: "grey",
        borderBottomWidth: 0.2
      },
      title: "ABOUT",
      tabBarStyle: {
      paddingTop: 10,
      },
    }}
    />
    <Tab.Screen 
    name="News"
    component={NewsScreen}
    options={{
      headerTitle: "NEWS",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
        padding: 18,
        color: "green"
      },
      headerStyle: {
        borderBottomColor: "grey",
        borderBottomWidth: 0.2
      },
      title: "NEWS",
      tabBarStyle: {
      paddingTop: 10,
      },
    }}
    />
  </Tab.Navigator>
  </NavigationContainer>
  );
}

