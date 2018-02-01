import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, TextInput } from 'react-native';

import WordComponent from '../components/WordComponent'

export default class MainScreen extends React.Component {
  render() {
    return (
        <View style={styles.container}>
            <FlatList
            data={this.props.screenProps}
            keyExtractor={(item, index) => index}
            renderItem={({item, index}) => <WordComponent navigation={this.props.navigation} index={index} item={item}/>}
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C5EFF7',
    },
    header: {
        flexDirection: 'row'
    }
});
