import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from './Login';
import Register from './Register';
import Forgotpassword from './Forgotpassword';
import Resetpassword from './Resetpassword';
import OTP from './OTP';

const Stack = createStackNavigator();


function MyStack1() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Forgotpassword" component={Forgotpassword} />
      <Stack.Screen name="OTP" component={OTP} />
      <Stack.Screen name="Resetpassword" component={Resetpassword} />
   
    
   

    </Stack.Navigator>
    
  );
}

const  AppContainer = () => {
    return (
        <NavigationContainer>
            <MyStack1 />
        </NavigationContainer>
    )
}

export default AppContainer; 