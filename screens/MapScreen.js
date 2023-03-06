import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, TextInput } from 'react-native';
import Map from '../components/Map';
import TestMap from '../testing/TestMap'

// const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // height: height / 2,
    flex:1,
    backgroundColor: 'blue',
  },
  map_content: {
    flex: 1,
  },
  text: {
    flex: 1,
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
  }
});

const MapScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='light' flex="1"/>
      {/* <Text style={styles.text}>Hello </Text> */}
        {/* <Map /> */}
        <View style={styles.map_content}>
            {/* <Text style={styles.text}>Hello World!</Text> */}
            <Map />
            {/* <TestMap /> */}
        </View>
        
    </SafeAreaView>
  );
};

export default MapScreen;
