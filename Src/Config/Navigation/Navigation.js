import React, { Component } from 'react';

import Login from './../../Screens/Login/Login'
import Signup from './../../Screens/Signup/Signup'
import Home from './../../Screens/Home/Home'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';
import Post from './../../Screens/Post/Post'
import Notification from './../../Screens/Notification/Notification'
import Settings from './../../Screens/Settings/Settings'
import MyRequests from './../../Screens/MyRequests/Myrequests'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Profile from './../../Components/MyProfile/Myprofile'
import { View,Text } from 'native-base';
import PostDetail from './../../Screens/DetailPost/DetailPost'

const MyDrawerNavigator = createDrawerNavigator({
  
  Home: {
    screen: Home,
    navigationOptions: { drawerIcon: () => <Ionicons name="md-home" size={24} /> }

  },
  CreatePost: {
    screen: Post,
    navigationOptions: { drawerIcon: () => <Ionicons name="ios-create" size={24} /> }

  },
  MyRequests: {
    screen: MyRequests,
    navigationOptions: { drawerIcon: () => <Ionicons name="md-contacts" size={24} /> }

  },

  Notification: {
    screen: Notification,

    navigationOptions: { drawerIcon: () => <Ionicons name="md-notifications" size={24} /> }

  },
  Settings: {
    screen: Settings,
    navigationOptions: { drawerIcon: () => <Ionicons name="md-settings" size={24} /> }

  },



},
  {
    contentComponent: props => (
      
      <View style={{flex:1}}>
        <View>
         <Profile {...props} />

        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <DrawerItems {...props} />
      </View>
       
    )
  }
);
const AppNavigator = createStackNavigator({

  Login: {
      screen: Login,
      navigationOptions: { header: null }
  },
  Signup: {
      screen: Signup,
      navigationOptions: { header: null }
  },
  Home: {
    screen: MyDrawerNavigator,
    navigationOptions: { header: null }

  },
  PostDetail : {
    screen: PostDetail,
    // navigationOptions: { header: null }

  },

});

export default createAppContainer(AppNavigator);





