import { View, FlatList, RefreshControl } from 'react-native'
import React from 'react'
import { DUMMY_DATA } from '../../data/dummy'
import EventItem from './EventItem'

const EventList = () => {

    const renderItem = ({item}) => {
        return <EventItem id={item.id} origin_time={item.origin_time} ml={item.ml} depth={item.depth} description={item.description}/>
    }
    return (
        <View >
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