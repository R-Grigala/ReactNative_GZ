import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/elements';

const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const { eventId, origin_time, depth, description } =route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "new title",
            headerLeft: () => (
                <HeaderBackButton 
                    tintColor='white'
                    onPress={() => navigation.goBack()}
                    style={{paddingRight: 100}}
                />
            )
        })
    }, [])

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