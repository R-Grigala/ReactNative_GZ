import { View, StyleSheet } from 'react-native';
import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

const locations = [
  { latitude: 37.78825, longitude: -122.4324 },
  { latitude: 37.78799, longitude: -122.4317 },
  { latitude: 37.78782, longitude: -122.4323 },
  { latitude: 37.78715, longitude: -122.4331 },
  { latitude: 37.78744, longitude: -122.4335 },
  { latitude: 37.78753, longitude: -122.4339 },
  { latitude: 37.78776, longitude: -122.4342 },
  { latitude: 37.78773, longitude: -122.4348 },
  { latitude: 37.78728, longitude: -122.4352 },
  { latitude: 41.882628, longitude: 42.994851 },
];

const Map = () => {
  return (
    <MapView 
        provider={PROVIDER_GOOGLE}
        customMapStyle={MapStyle}
    >
  </MapView>
  );
};

const styles = StyleSheet.create({

  mapview: {
    width: '100%',
    height: '50%'
    // ...StyleSheet.absoluteFillObject,
  },
  });

export default Map