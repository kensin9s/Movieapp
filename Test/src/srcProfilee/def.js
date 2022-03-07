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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import abc from './abc';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false ,tabBarActiveTintColor:'#376AED'}}>
      <Tab.Screen name="Home"  component={MyStack} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Home size={20}/>
          ),
        }}>
      </Tab.Screen>
      <Tab.Screen name="cộng đồng" component={Settingaccount}  options={{
   //tabBarStyle: { display: "none" },
   tabBarLabel: 'Cộng đồng',
   tabBarIcon: ({ color, size }) => (
   <MaterialCommunityIcons name="Comunity" color={color} size={size} />
   ),
}}/>
      <Tab.Screen name="Tin Nhắn" component={setupnotifications} options={{
          tabBarLabel: 'Tin Nhắn',
          tabBarIcon: ({ color, size }) => (
            <Message size={20}/>
          ),
        }} />
      <Tab.Screen name="Quản lí" component={setupnotifications} options={{
          tabBarLabel: 'Quản lí',
          tabBarIcon: ({ color, size }) => (
            <Manage size={20}/>
          ),}}/>
      <Tab.Screen name="Tài khoản" component={Profile1} options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: ({ color, size }) => (
            <Account size={20}/>
          ),
        }} />
    </Tab.Navigator>  
  );
  
}

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false ,}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settingaccount" component={Settingaccount} />
      <Stack.Screen name="setupnotifications" component={setupnotifications} />
      <Stack.Screen name="Profile1" component={Profile1} />
      <Stack.Screen name="Verifyphonenumber" component={Verifyphonenumber} />
      <Stack.Screen name="Verifyphonenumber1" component={Verifyphonenumber1} />
      <Stack.Screen name="verificationEmail" component={verificationEmail} />
      <Stack.Screen name="verificationEmail1" component={verificationEmail1} />
      <Stack.Screen name="evaluateApp" component={evaluateApp} />
    </Stack.Navigator>
  );
}

const  AppContainer = () => {
    return (
        <NavigationContainer>
          <MyTabs>
         
          </MyTabs>
          
        </NavigationContainer>
    )
}

export default AppContainer; 