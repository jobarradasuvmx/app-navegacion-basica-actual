import { Link } from 'expo-router';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
export class contacto extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Concacto </Text>
        <Link href="/">Inicio</Link>
    <Link href="/acercademi">Acerca de mí</Link>
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
export default contacto
