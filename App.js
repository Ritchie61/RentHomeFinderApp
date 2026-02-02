import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AddListingScreen from './screens/AddListingScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Available Rentals' }}
        />
        <Stack.Screen
          name="AddListing"
          component={AddListingScreen}
          options={{ title: 'Add Listing' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
