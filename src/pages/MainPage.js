/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MainPage extends Component {
  static navigationOptions = {
    title: '主页',
};
  render() {
    const {params} = this.props.navigation.state;    
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Text>{'姓名:' + params.user.name + '\n年龄:' + params.user.age}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
