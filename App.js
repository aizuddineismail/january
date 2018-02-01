import React, { version } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Root from './screens/Root'

import { verb } from './verb'

export default class App extends React.Component {
  render() {
    return (
      <Root screenProps={verb}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
