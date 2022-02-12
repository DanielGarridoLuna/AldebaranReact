import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { db } from '../Server/conexion';
import { collection, getDocs } from "firebase/firestore";

const SRread = () => {


  async function leer(){
    const querySnapshot = await getDocs(collection(db, "Productos"));

        querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().Producto}, $${doc.data().Precio}`);
  });
  }


    return (
        <View style={styles.container}>
          <Text>Lee información</Text>
          <Button title="Leer" onPress={() =>leer()}>Leer</Button>
        </View>
      )
}

export default SRread

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
