import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import CreateFlowScreen from './src/screens/CreateFlowScreen';
import Viewport from './src/screens/DragableTest';
import FlowsScreen from './src/screens/FlowsScreen';


type RootStackParamList = {
  FlowPing: undefined;
  'Create Flow': undefined;
  'Testing':undefined;
  'Flows':undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FlowPing">
        <Stack.Screen name ="Testing" component={Viewport} />
        <Stack.Screen name="FlowPing" component={HomeScreen} />
        <Stack.Screen name="Create Flow" component={CreateFlowScreen} />
        <Stack.Screen name="Flows" component={FlowsScreen}/>
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
