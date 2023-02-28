import { View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.screen}>
      <Text>This is the Home Screen</Text>
      <Button title="move to detail" onPress={()=> navigation.navigate('Event')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  }
})

export default HomeScreen