import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SRadd from './Pantallas/SRadd'
import SRread from './Pantallas/SRread'

const styles = StyleSheet.create({
  Boton: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
});


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent: 'space-evenly',}}>
    
      <Button
   
        title="Leer Información"
    
        onPress={() => navigation.navigate('Leer')}
      />

      <Button
        title="Agregar Información"
        style={styles.Boton}
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



