import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SearchBar } from 'react-native-elements';
import HeaderComponent from './HeaderComponent'

export default class Main extends React.Component {

  render() {
    return (
        <View style={styles.container}>
            <HeaderComponent />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: 'lightblue'
  },
});
