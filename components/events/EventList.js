import { View, Text, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import { DUMMY_DATA } from '../../data/dummy'

const EventList = () => {

    const renderItem = ({item}) => {
        return <View style={{padding: 40}}><Text>{item.title}</Text></View>
    }
    return (
        <View>
            <FlatList 
                data={DUMMY_DATA}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={() => console.log('refreshing...')}
                    />
                }
            />
        </View>
    )
}

export default EventList