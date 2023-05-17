import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import{NavigationContainer} from "@react-navigation/native";
import{createStackNavigator} from "@react-navigation/stack";
import HomeScreen from './screens/HomeScreen';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteors';
import UpdateScreen from './screens/Updates';

const Stack = createStackNavigator();



function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator  initialRouteName = "Home" screenOptions={{headerShown:false
      
      }}> 
        <Stack.Screen name = "Home" component = {HomeScreen}/>
        <Stack.Screen name = "IssLocation" component = {IssLocationScreen}/>
        <Stack.Screen name = "Meteor" component = {MeteorScreen}/>
        <Stack.Screen name = "Update" component = {UpdateScreen}/>
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

export default App;