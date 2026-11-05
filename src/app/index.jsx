import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from 'expo-router';
import { Component } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text > Bienvenido a mi aplicación </Text>
        <View><Link href="/contacto" asChild>
        <Button title='Contacto' /></Link></View>
        <Link href="/acercademi" asChild>
        
        <Pressable><Ionicons name="save" size={24} /><Text>Acerca de mi</Text></Pressable>
        </Link>
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
});
export default index
