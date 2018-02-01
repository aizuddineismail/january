import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { Button, Icon } from 'react-native-elements';

import SearchBar from 'react-native-searchbar';

export default class HeaderRight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            searchVerb: '',
        };
        this._handleChangeText = this._handleChangeText.bind(this);
        this._onSubmitEditing = this._onSubmitEditing.bind(this);
    }

    openModal(){
        this.setState({modalVisible: true})
    }

    closeModal(){
        this.setState({modalVisible: false})
    }

    _handleChangeText(input){
        this.setState({searchVerb: input})

        // this.closeModal()
        // this.props.navigation.navigate('Table', {...this.props.verb[i]})
        // break
    }

    _onSubmitEditing(){
        const search_verb = this.state.searchVerb.toLowerCase()
        const list_verb = this.props.verb
        const repeated_verbs = []
        const dictionary = []
        const index = []

        this.setState({searchVerb: ''})

        for(i = 0; i < this.props.verb.length; i++){
            if (list_verb[i]["English"].indexOf(search_verb) > -1){
                repeated_verbs.push(search_verb)
                dictionary.push(list_verb[i]["Dictionary"].map((item) => item))
                index.push(i)

            }else if (list_verb[i]["Dictionary"].indexOf(search_verb) > -1){
                repeated_verbs.push(search_verb)
                dictionary.push(list_verb[i]["Dictionary"].map((item) => item))
                index.push(i)

            }else if (list_verb[i]["-Masu Form"].indexOf(search_verb) > -1){
                repeated_verbs.push(search_verb)
                dictionary.push(list_verb[i]["Dictionary"].map((item) => item))
                index.push(i)
            }
        }

        if(repeated_verbs.length == 0){
            Alert.alert(
                'Search Word Not Found',
                'Please enter the verb in either\nEnglish\ndictionary form\n-masu form',
                [
                    {text: 'Okay'}
                ]
            )
        }else if (repeated_verbs.length == 1){
            this.closeModal()
            this.props.navigation.navigate('Table', {...this.props.verb[index[0]]})
        }else{
            Alert.alert(
                'Search Word Error',
                'The search word may have several possible matching. Please enter a word in kanji or another possible synonym to avoid this message error',
                [
                    {text: 'Okay'}
                ]
            )
        }
    }

  render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.icon} onPress={() => this.openModal()}>
                <Icon 
                name='search' 
                type='octicon'
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon} onPress={() => this.props.navigation.navigate('Info')}>
                <Icon 
                name='info'
                type='octicon'
                />
            </TouchableOpacity>
            <Modal
              visible={this.state.modalVisible}
              onRequestClose = {() => this.closeModal()}
              transparent = {true}
            >
                <SearchBar
                ref={(ref) => this.searchBar = ref}
                data = {this.props.verb}
                handleChangeText = {this._handleChangeText}
                onSubmitEditing = {this._onSubmitEditing.bind(this)}
                showOnLoad
                onBack ={() => this.closeModal()}
                placeholder = "Search Verb"
                heightAdjust = {-8}
                />

                <TouchableWithoutFeedback onPress={() => this.closeModal()}>
                    <View style={styles.searchOpacity} />
                </TouchableWithoutFeedback>

            </Modal>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    icon: {
        padding: 5
    },
    searchOpacity: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        flex: 1,
    }
})