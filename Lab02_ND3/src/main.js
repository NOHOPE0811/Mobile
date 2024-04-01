

import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Calculator from './src/ScreenA';
import LIST from './src/ScreenB';
import LinearEquation from './src/ScreenD';

function CalculationScreen() {
return (
<View style={styles.Container}>
  <Calculator/>
</View>
);
};

function AboutScreen() {
  return (
  <View style={styles.Container}>
    <LIST/>
  </View>
  );
}

function LinearEquationSreen() {
  return (
  <View style={styles.Container}>
    <LinearEquation/>
  </View>
  );

};
const styles = StyleSheet.create({
Container: {
flex: 1,
},
});
const styles1 = StyleSheet.create({
Container: {
flex: 1,
},
flatlist: {
flex: 1,
fontSize: 20,
justifyContent: 'center',
alignItems: 'center',
flexDirection: 'row',
color: 'blue',
padding: 10,
backgroundColor: 'lightblue',
marginTop:3,
borderRadius:10,
}
});
const Tab = createBottomTabNavigator();
const App = () => {
return (
<NavigationContainer>
<Tab.Navigator
screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
if (route.name === 'Calculation') {
iconName = focused
? 'information-circle'
: 'information-circle-outline';
} else if (route.name === 'About') {
iconName = focused ? 'list' : 'list-circle';
}
else if (route.name === 'LinearEquation') {
  iconName = focused ? 'calculator' : 'pencil';
  }
// You can return any component that you like here!
return <Icon name={iconName} size={size} color={color} />;
},
tabBarActiveTintColor: 'tomato',
tabBarInactiveTintColor: 'black',
})}
>
<Tab.Screen name="Calculation" component={CalculationScreen}/>
<Tab.Screen name="About" component={AboutScreen} />
<Tab.Screen name="LinearEquation" component={LinearEquationSreen} />
</Tab.Navigator>
</NavigationContainer>
);
}
export default App;


