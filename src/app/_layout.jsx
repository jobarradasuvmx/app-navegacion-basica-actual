import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen name='index' options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="home-outline" color={color} />
        }}
      />
      <Tabs.Screen name='contacto' options={{ title:'Contacto', tabBarIcon: ({ color }) => (
  <Ionicons
    name="man-outline"
    size={28}
    color={color}
  />
) }}   />
      <Tabs.Screen name='acercademi' options={{ title:'Acerca de mí', tabBarIcon: ({ color }) => (
  <Ionicons
    name="pizza-outline"
    size={28}
    color={color}
  />
  ) }}   />
  <Tabs.Screen name='explore' options={{ title:'Explore', tabBarIcon: ({ color }) => (
  <Ionicons
    name="newspaper-outline"
    size={28}
    color={color}
  />
  ) }}   />
    </Tabs>
    );
}