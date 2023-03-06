import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView, View, Image } from 'react-native';

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
        options={{title: 'Home'}} 
    />
      <Drawer.Screen 
        name="ProfileStack" 
        component={ProfileStack} 
        options={{title: 'Profile'}} 
    />
    </Drawer.Navigator>
  );
}