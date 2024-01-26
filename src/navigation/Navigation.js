import React from 'react';
import Login from '../components/Auth/Login/Login';
import BottomTabs from '../components/screens/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from '../components/screens/SplashScreen';
// import SetPassword from '../components/Auth/SetPassword/SetPassword';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MobileLogin from '../components/Auth/Login/MobileLogin';

// import OfflineNotice from '../components/utility/OfflineNotice';

// import SetProfile from '../components/Profile/SetProfile';
import OTP from '../components/Auth/Login/OTP';
import ForgotPassword from '../components/Auth/ForgotPassword/ForgotPassword';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="SplashScreen">
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabs}
          //   initialParams={{fcmToken: fcmToken}}
        />
        {/* <Stack.Screen name="MobileLogin" component={MobileLogin} /> */}
        {/* <Stack.Screen name="SetPassword" component={SetPassword} />
        <Stack.Screen name="SetProfile" component={SetProfile} /> */}
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
      {/* <OfflineNotice /> */}
    </NavigationContainer>
  );
};

export default Navigation;
