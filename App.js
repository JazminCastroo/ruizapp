import React from 'react'; //codigo principallll, configura y define el tema de la navegacion en la app
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './vistas/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: '' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
