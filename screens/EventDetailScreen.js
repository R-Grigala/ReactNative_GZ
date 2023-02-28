import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const EventDetailScreen = () => {
    return (
        <View style={styles.screen}>
          <Text>This is the Event Detail Screen</Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
    padding: 20,
    }
})

export default EventDetailScreen;