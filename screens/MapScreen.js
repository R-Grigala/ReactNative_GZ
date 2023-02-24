import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Map from '../components/Map';

// const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    // height: height / 2,
    flex:1
  },
  content: {
    flex: 1,
    backgroundColor: 'black'
  },
  text: {
    color: 'white',
    fontSize: 20,
  }
});

const MapScreen = () => {
  return (
    <View style={styles.container}>
        {/* <Map /> */}
        <View style={styles.content}>
            <Text style={styles.text}>Hello World!</Text>
        </View>
    </View>
  );
};

export default MapScreen;
