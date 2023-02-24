import { View, StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';

const Map = () => {
  return (
    <MapView 
        style={styles.mapview}
        region={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
        }}
        mapType="satellite"
        showsMyLocationButton={true}
        showsUserLocation={true}
    >
        <Marker coordinate={{
          latitude: 37.78825,
          longitude: -122.4324,
        }} />
    </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    width: '100%',
    height: '50%'

  },
  });

export default Map