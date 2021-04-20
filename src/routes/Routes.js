import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Home from 'pages/home';
import ROUTES from 'constants/routes';
import Cities from 'pages/cities';
import Profile from 'pages/profile';
import {ThemeContext} from 'styled-components';

const Tabs = createMaterialBottomTabNavigator();
function TabsStack() {
  const theme = useContext(ThemeContext);

  const TabIcon = ({name, color}) => (
    <Icon name={name} color={color} size={theme.palette.tab.iconSize} />
  );

  return (
    <Tabs.Navigator
      initialRouteName={ROUTES.HOME}
      activeColor={theme.palette.tab.activeIcon}
      inactiveColor={theme.palette.tab.inactiveIcon}
      labeled={false}
      barStyle={{
        backgroundColor: theme.palette.tab.color,
      }}>
      <Tabs.Screen
        name={ROUTES.home.name}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon name={ROUTES.home.icon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={ROUTES.city.name}
        component={Cities}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon name={ROUTES.city.icon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={ROUTES.profile.name}
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <TabIcon name={ROUTES.profile.icon} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}

export function Routes() {
  return (
    <NavigationContainer>
      <TabsStack />
    </NavigationContainer>
  );
}
