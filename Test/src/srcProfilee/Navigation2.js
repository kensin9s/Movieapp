import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from './Profile';
import Settingaccount from './Settingaccount';
import Profile1 from './Profile1';
import Verifyphonenumber from './Verifyphonenumber';
import Verifyphonenumber1 from './Verifyphonenumber1';
import verificationEmail from './verificationEmail';
import verificationEmail1 from './verificationEmail1';
import setupnotifications from './setupnotifications';
import evaluateApp from './evaluateApp';
import Home from '../srcProfilee/svgProfile/homee.svg';
import Comunity from '../srcProfilee/svgProfile/comunityy.svg';
import Manage from '../srcProfilee/svgProfile/managee.svg';
import Message from '../srcProfilee/svgProfile/messagee.svg';
import Account from '../srcProfilee/svgProfile/accountt.svg';

import Login from '../srcLoginn/Login';
import Register from '../srcLoginn/Register';
import Forgotpassword from '../srcLoginn/Forgotpassword';
import Resetpassword from '../srcLoginn/Resetpassword';
import OTP from '../srcLoginn/OTP';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { mdiAccount } from '@mdi/js';
import navifolloww from '../srcFollow/naviFollow';
import Followers from '../srcFollow/Followers';
import listfollow from '../srcFollow/listfollow';
import List from '../srcMovie/List';
import watch from '../srcMovie/Watch';
import search from '../srcMovie/Search';

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#376AED' }}>
      
      <Tab.Screen name="Home" component={MyStack3} options={{
        // tabBarStyle: { display: "none" },
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}>
      </Tab.Screen>
      <Tab.Screen name="Tìm kiếm" component={search} options={{
        //tabBarStyle: { display: "none" },
        tabBarLabel: 'Tìm kiếm',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="magnify" color={color} size={size} />
        ),
      }} />

      <Tab.Screen name="Quản lí" component={Settingaccount} options={{
        tabBarLabel: 'Quản lí',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Tài khoản" component={MyStack} options={{
        tabBarLabel: 'Tài khoản',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-circle" color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );

}

const Stack = createStackNavigator();
function MyStack() {
  return (
    
    <Stack.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true,
      tabBarStyle: [{ display: "flex" }, null]}}>
      
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settingaccount" component={Settingaccount} />
      <Stack.Screen name="setupnotifications" component={setupnotifications} />
      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="Verifyphonenumber" component={Verifyphonenumber} />
      <Stack.Screen name="Verifyphonenumber1" component={Verifyphonenumber1} />
      <Stack.Screen name="verificationEmail" component={verificationEmail} />
      <Stack.Screen name="verificationEmail1" component={verificationEmail1} />
      <Stack.Screen name="evaluateApp" component={evaluateApp} />
      {/* <Stack.Screen name="Mystack1" component={MyStack1} /> */}
      
    </Stack.Navigator>
  );
}
const Stack1 = createStackNavigator();


function MyStack1() {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false,tabBarHideOnKeyboard: true,
      tabBarStyle: [{ display: "flex" }, null] }}>
      <Stack1.Screen name="Login" component={Login} />
      <Stack1.Screen name="Register" component={Register} />
      <Stack1.Screen name="Forgotpassword" component={Forgotpassword} />
      <Stack1.Screen name="OTP" component={OTP} />
      <Stack1.Screen name="Resetpassword" component={Resetpassword} />
      <Stack1.Screen name="prrofile" component={MyStack} />
      <Stack1.Screen name="tab" component={MyTabs} />
     

    </Stack1.Navigator>

  );
}
const Stack3 = createStackNavigator();


function MyStack3() {
  return (
    <Stack3.Navigator screenOptions={{ headerShown: false }}>
    <Stack3.Screen name="List" component={List} />
              <Stack3.Screen name="watch" component={watch} />
    </Stack3.Navigator>

  );
}

const Stack2 = createStackNavigator();


function MyStack2() {
  return (
    <Stack2.Navigator screenOptions={{ headerShown: false,tabBarHideOnKeyboard: true,
      tabBarStyle: [{ display: "flex" }, null] }}>
      {/* <Stack2.Screen name="Followers" component={Followers} /> */}
      <Stack2.Screen name="listfollow" component={listfollow} />
    </Stack2.Navigator>
    
  );
}
const AppContainer = () => {
  return (
    <NavigationContainer>
      <MyStack1>
      </MyStack1>
    </NavigationContainer>
  )
}

export default AppContainer; 