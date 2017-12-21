/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  Navigator
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginPage from '../pages/LoginPage.js'
import MainPage from '../pages/MainPage.js'

const App = StackNavigator({
  Login: { screen: LoginPage },
  Main:{screen: MainPage},
});

export default App;
