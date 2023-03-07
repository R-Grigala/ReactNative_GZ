import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import About from '../screens/About';

const Tab = createBottomTabNavigator();

export const HomeTabs = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'black',
            },
            tabBarActiveTintColor: 'yellow',
            // tabBarInactiveTintColor: 'red',
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'HomeTabs') {
                    iconName = focused ? 'home' : 'home-outline'
                }
                else if (route.name === 'About') {
                    iconName = focused ? 'list' : 'map-outline'
                }
                else if (route.name === '') {
                    iconName = focused ? 'news' : 'news-outline'
                }

                return <Ionicons name={iconName} size={focused ? 35: size} color={color} />
            }
        })}
      >
        <Tab.Screen
            name="HomeTabs"
            options={{
                title:'Home'
            }}
            component={HomeScreen} />
        <Tab.Screen name="About" component={About} />
      </Tab.Navigator>
  );
}

export default HomeTabs;