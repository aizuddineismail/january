import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ResultScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <Text>This is Result Sceen</Text>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Table')}>
                <View style={styles.button}></View>
            </TouchableOpacity>
        </View>
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
  button: {
      height: 40,
      width: 40,
      backgroundColor: 'black'
  }
});
