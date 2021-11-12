import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';

import {
  WorkoutsScreen,
  WorkoutScreen,
  CalendarScreen,
  IntervalScreen,
} from './src/screens';
import { NavigationContainer } from '@react-navigation/native';
import store from './src/redux/store';
import { CalendarIcon, IntervalIcon, StrengthIcon } from './src/icons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Workouts" component={WorkoutsScreen} />
      <Stack.Screen
        name="Workout"
        component={WorkoutScreen}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.background}>
        <SafeAreaView style={styles.background}>
          <NavigationContainer style={styles.background}>
            <Tabs.Navigator style={styles.background}>
              <Tabs.Screen
                name="Strength"
                component={StackNavigator}
                options={{
                  headerShown: false,
                  tabBarIcon: ({ color, size }) => (
                    <StrengthIcon size={size} color={color} />
                  ),
                }}
              />
              <Tabs.Screen
                name="Calendar"
                component={CalendarScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <CalendarIcon color={color} size={size} />
                  ),
                }}
              />
              <Tabs.Screen
                name="Intervals"
                component={IntervalScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <IntervalIcon size={size} color={color} />
                  ),
                }}
              />
            </Tabs.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default App;
