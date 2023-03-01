import React from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import MapScreen from "./screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./navigation/Stack";
import { MyDrawer } from "./navigation/Drawer";
import { StatusBar } from "expo-status-bar";


export default function App() {
  return (
    <NavigationContainer>
      {/* <HomeStack /> */}
      {/* <MapScreen /> */}
      <MyDrawer />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}