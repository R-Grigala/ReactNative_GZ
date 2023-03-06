import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EventDetailScreen from '../screens/EventDetailScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileDetailScreen from '../screens/profiles/ProfileDetailScreen';
import ProfileScreen from '../screens/profiles/ProfilesScreen';
import { navOptions } from './Options';

const Stack = createStackNavigator();

export const HomeStack = () => {
  const navigation = useNavigation()
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Event" component={EventDetailScreen} />
    </Stack.Navigator>
  );
}

export const ProfileStack = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={() => navOptions(navigation)}
    >
      <Stack.Screen name='Profiles' component={ProfileScreen} />
      <Stack.Screen name='Profile' component={ProfileDetailScreen} />

    </Stack.Navigator>
  )
}