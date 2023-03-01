import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const EventDetailScreen = () => {
    const route = useRoute()

    const { eventId, origin_time, depth, description } =route.params
    return (
        <View style={styles.screen}>
          <Text style={styles.text}>Origin Time : {origin_time}</Text>
          <Text style={styles.text}>Depth : {depth}</Text>
          <Text style={styles.description}>Description : {description}</Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
    padding: 20,
    },
    text: {
        fontSize: 15
    },
    description: {
        fontSize: 15
    }
})

export default EventDetailScreen;