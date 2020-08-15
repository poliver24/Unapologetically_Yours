import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";


function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.TextStyle}>UNAPOLOGETICALLY YOURS...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function JessScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Jess' Story</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home";
            } else if (route.name === "Jess") {
              iconName = focused ? "md-happy" : "md-happy";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#358bd4",
          inactiveTintColor: "gray",
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Jess" component={JessScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#358bd4",
    alignItems: "center",
    justifyContent: "center",
  },
  TextStyle: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
},
});
