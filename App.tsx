import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import Register from './screen/Register';
import TheLeChuongTrinh from './screen/TheLeChuongTrinh';
import Login from './screen/Login';
import OTP_Register from './screen/OTP_Register';
import Home_Page from './screen/Home_Page';
import Giude from './screen/Giude';
import Code_Scan from './screen/Code_Scan';
import Collection from './screen/Collection';
import Gift from './screen/Gift';
import Play from './screen/Play';


const App = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Register" screenOptions = {{headerShown: false}}>
                <Stack.Screen name='Register' component={Register}></Stack.Screen>
                <Stack.Screen name='TheLeChuongTrinh' component={TheLeChuongTrinh}></Stack.Screen>
                <Stack.Screen name='Login' component={Login}></Stack.Screen>
                <Stack.Screen name='OTP_Register' component={OTP_Register}></Stack.Screen>
                <Stack.Screen name='Home_Page' component={Home_Page}></Stack.Screen>
                <Stack.Screen name='Giude' component={Giude}></Stack.Screen>
                <Stack.Screen name='Code_Scan' component={Code_Scan}></Stack.Screen>
                <Stack.Screen name='Collection' component={Collection}></Stack.Screen>
                <Stack.Screen name='Gift' component={Gift}></Stack.Screen>
                <Stack.Screen name='Play' component={Play}></Stack.Screen>
              
              
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
