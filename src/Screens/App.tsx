import * as React from 'react';
import HomeScreen from './Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from '../redux/store';

export const RootStackNav = createNativeStackNavigator();

function AppNavContainer() {
  return (
    <NavigationContainer>
      <RootStackNav.Navigator
        screenOptions={{headerShown: false, animation: 'slide_from_right'}}
        initialRouteName="HomeScreen">
        <RootStackNav.Screen name="HomeScreen" component={HomeScreen} />
      </RootStackNav.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <View style={{marginTop: 50, marginHorizontal: 20, height: '100%'}}>
      <Provider store={store}>
        <AppNavContainer />
      </Provider>
    </View>
  );
}
