
import React, { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { ActivityIndicator, View } from 'react-native';
import Header from './Component/Calculation/Header';

import Calculator from './src/ScreenA';
import LIST from './src/ScreenB';
import WE from './src/ScreenC';
import LinearEquation from './src/ScreenD';
import SplashScreen from './ScreenWait/Screen';

const Tab = createMaterialBottomTabNavigator();

function App() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplashVisible(false);
    }, 3000);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <View>
        <Header/>
      </View>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Calculation') {
              iconName = 'exclamation';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            } else if (route.name === 'About') {
              iconName = 'address-card';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            else if (route.name === 'We') {
              iconName = 'user';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            else if (route.name === 'bac1') {
              iconName = 'calculator';
              size = focused ? 25 : 20;
              // color = focused ? '#f0f' : '#555';
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}npm install react-native-screens react-native-safe-area-context
              />
            );
          },
        })}
        barStyle={{ backgroundColor: '#fff' }}

        tabBarOptions={{
          activeTintColor: '#f0f',
          inactiveTintColor: '#555',
          activeBackgroundColor: '#fff',
          inactiveBackgroundColor: '#999',
          showLabel: true,
          showIcon: true,
        }}
      >
        <Tab.Screen
          name="Calculation"
          component={Calculator}
          options={{ tabBarBadge: 5 }}
        />
        <Tab.Screen
          name="About"
          component={LIST}
        />
        <Tab.Screen
          name="We"
          component={WE}
        />
        <Tab.Screen
          name="bac1"
          component={LinearEquation}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;