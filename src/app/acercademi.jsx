import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export class acercademi extends Component {
  

  render() {
    const libros=['El arte de la guerra','El principito','Quien se ha robado mi queso'];
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}> Acerca de mí </Text>
        <Text style={styles.subtitulo}> Mis libros favoritos </Text>
       
        <View>{libros.map((libro)=><Text key={libro} >{libro}</Text>)}</View>
        <View><Text>No. de libros {libros.length}</Text></View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize:30,
    fontWeight:'bold'

  },
  subtitulo: {
    fontSize:20,
    fontStyle:'italic',
    
  },
});
export default acercademi
