import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Assignment from './screens/Assignment';
import HomeScreen from './screens/HomeScreen';
import Profile from './screens/Profile';




const Stack=createNativeStackNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
     <Stack.Navigator>
     
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="Profile" component={Profile} />
    
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
