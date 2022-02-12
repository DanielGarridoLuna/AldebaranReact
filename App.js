import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SRadd from './Pantallas/SRadd'
import SRread from './Pantallas/SRread'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Leer Información"
        onPress={() => navigation.navigate('Leer')}
      />

      <Button
        title="Agregar Información"
        onPress={() => navigation.navigate('Agregar')}
      />

    </View>
  );
}

function ReadScreen({ navigation }) {
  return (
    <SRread/>
  );
}

function AddScreen({ navigation }) {
  return (
    <SRadd/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Leer" component={ReadScreen} />
        <Stack.Screen name="Agregar" component={AddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
