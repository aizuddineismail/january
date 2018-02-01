import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';

export default class HeaderLeft extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Welcome')}>
                <Icon
                name='star'
                type='octicon'
                />
            </TouchableOpacity>
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    },
    icon: {
        padding: 10
    }
})