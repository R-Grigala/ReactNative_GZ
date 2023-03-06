import { View, Text } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { HeaderBackButton } from '@react-navigation/elements';

const ProfileDetailScreen = () => {
    const route = useRoute()
    const navigation = useNavigation()

    const { profileID } =route.params

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderBackButton 
                    tintColor='white'
                    onPress={() => navigation.goBack()}
                />
            )
        })
    }, [])

    return (
        <View>
            <View>
                <Text>Profile id: {profileID}</Text>
            </View>
        </View>
    )
}

export default ProfileDetailScreen;