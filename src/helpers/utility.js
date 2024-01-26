import {PermissionsAndroid} from 'react-native';

export const checkLocationServices = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return granted === 'granted';
  } catch (error) {
    console.log(error);
  }
};

export const checkStorageServices = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  );
  return granted;
};
