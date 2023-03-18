import { View, Text, StyleSheet } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/elements';

const EventDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const { eventId, name, description } =route.params

    useLayoutEffect(() => {
        navigation.setOptions({
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
          <Text style={styles.text}>This is Event Detail Screen For {eventId}</Text>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.description}>Description : {description}</Text>
        </View>
    )
}
    
const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
    text: {
        fontSize: 20
    },
    description: {
        fontSize: 14
    }
})

export default EventDetailScreen;