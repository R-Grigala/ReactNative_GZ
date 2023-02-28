import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is the Home Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  }
})

export default HomeScreen