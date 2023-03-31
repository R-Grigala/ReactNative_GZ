import React, { useEffect } from "react";
import Home from "./screens/Home";
import About from "./screens/About";
import ReviewDetails from "./screens/ReviewDetails";
import MapScreen from "./screens/MapScreen";
import { NavigationContainer } from "@react-navigation/native";
import { HomeStack } from "./navigation/Stack";
import { MyDrawer } from "./navigation/Drawer";
import { StatusBar } from "expo-status-bar";
import { Alert, View, StyleSheet, Text } from "react-native";


export default function App() {

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    if(requestUserPermission()){

      messaging().getToken().then(token => {
        console.log(token);
      });
    }
    else {
      console.log("Failed token status:", authStatus);
    }

    messaging()
    .getInitialNotification()
    .then( async (remoteMessage) => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });

    messaging().onNotificationOpenedApp( async (remoteMessage) => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler( async (remoteMessage) => {
      console.log('Message handled in the background!', remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;

  },[])

  return (
    // <NavigationContainer>
    //   <HomeStack />
    //   <MapScreen />
    //   <MyDrawer />
    //   <StatusBar style="light" />
    // </NavigationContainer>

    <View style={StyleSheet.container}>
      <Text>FCM Tutorial Using React Native & Expo</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
})