import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, View, Image, Linking } from 'react-native';

import { HomeStack, ProfileStack } from './Stack';

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator 
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{flex: 1, paddingTop: 20, backgroundColor: '#fff' }} >
            <View style={{justifyContent: 'center', alignItems: 'center', height:140}}>
              <Image 
                style={{width: 100, resizeMode: 'contain'}}
                source={require("../assets/images/logo.png")}
              />
            </View>
            <DrawerItemList {...props}/>
            <DrawerItem 
              label="More info" 
              onPress={() => Linking.openURL('https://ies.iliauni.edu.ge/')}
              icon={() => (
                <Ionicons name='information' size={22} />
              )}
            />
          </SafeAreaView>
        );
      }}
        screenOptions={{
          headerShown: false,
        }}
      >
      <Drawer.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{title: 'Home', drawerIcon: () => <Ionicons name='home' size={22}/>}} 
    />
      <Drawer.Screen 
        name="ProfileStack" 
        component={ProfileStack} 
        options={{title: 'Profile', drawerIcon: () => <MaterialCommunityIcons name='face-man-profile' size={22}/>}} 
    />
    </Drawer.Navigator>
  );
}