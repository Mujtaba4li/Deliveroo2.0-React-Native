import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    {/* <View >
      <Text className=' text-red-600 mt-9 left-6'>
        Oh ustadd its working...
      </Text>
      
  
      <StatusBar style="auto" />
    </View> */}
     <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Resturant" component={ResturantScreen} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
