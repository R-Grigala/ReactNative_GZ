import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About Screen</Text>
    </View>
  )


}

const styles = StyleSheet.create({
    container: {
        padding: 24
    }
  })

export default About