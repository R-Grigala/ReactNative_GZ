import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from '../screens/EventDetailScreen';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}