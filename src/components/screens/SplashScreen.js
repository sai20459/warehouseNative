import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {checkLocationServices} from '../../helpers/utility';
import {useNavigation} from '@react-navigation/native';

function SplashScreen(props) {
  const navigation = useNavigation();

  const navigateUser = () => {
    AsyncStorage.getItem('user').then(async res => {
      const user = JSON.parse(res);
      if (user?.first_name === undefined) AsyncStorage.clear();
      if (user?.access_token) {
        await checkLocationServices();
        setTimeout(() => {
          navigation.replace('BottomTabs');
        }, 1000);
      } else {
        setTimeout(() => {
          navigation.replace('Login', {});
        }, 1000);
      }
    });
  };

  useEffect(() => {
    navigateUser();
  });

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}>
      <Text>hello</Text>
    </View>
  );
}

export default SplashScreen;
