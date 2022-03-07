import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Followers from './Followers';
import listfollow from './listfollow';


const Stack2 = createStackNavigator();


function MyStack2() {
  return (
    <Stack2.Navigator screenOptions={{ headerShown: false }}>
      <Stack2.Screen name="Followers" component={Followers} />
      <Stack2.Screen name="listfollow" component={listfollow} />
    </Stack2.Navigator>
    
  );
}

const  AppContainer = () => {
    return (
        <NavigationContainer>
            <MyStack2 />
        </NavigationContainer>
    )
}

export default AppContainer; 