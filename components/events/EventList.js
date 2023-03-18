import { View, FlatList, RefreshControl } from 'react-native'
import React from 'react'
// import { DUMMY_DATA } from '../../data/dummy'
import EventItem from './EventItem'

const EventList = ({data, onRefresh}) => {

    const renderItem = ({item}) => {
        return <EventItem id={item.id} name={item.name} description={item.description} qrCode={item.qr_code}/>
    }
    return (
        <View >
            <FlatList 
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                refreshControl = {
                    <RefreshControl
                        refreshing={false}
                        onRefresh={onRefresh}
                    />
                }
            />
        </View>
    )
}

export default EventList