import React from "react";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ClearSlots from "../screens/ClearSlots";
import CreateSlots from "../screens/CreateSlots";
import Home from "../screens/Home";
import RegisterSlots from "../screens/RegisterSlots";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Dashboard",
            headerStyle: {
              backgroundColor: "#e67e22",
            },
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTintColor: "#fff",
          }}
        />
        <Stack.Screen
          name="CreateSlot"
          component={CreateSlots}
          options={{
            title: "Create Slots",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
        <Stack.Screen
          name="RegisterSlot"
          component={RegisterSlots}
          options={{ title: "Register Slots" }}
        />
        <Stack.Screen
          name="ClearSlot"
          component={ClearSlots}
          options={{
            title: "Clear Slots",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
