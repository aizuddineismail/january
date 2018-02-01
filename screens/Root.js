import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation';

import MainScreen from './MainScreen';
import InfoScreen from './InfoScreen';
import WelcomeScreen from './WelcomeScreen';
import TableScreen from './TableScreen';

import HeaderRight from '../components/HeaderRight';
import HeaderLeft from '../components/HeaderLeft';

export default Root = StackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions:
            ({navigation, screenProps}) => ({
                title: 'Japanese Verb Conjugator',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: 'blue',
                    color: 'black',
                    fontSize: 16
                },
                headerRight: <HeaderRight navigation={navigation} verb={screenProps}/>,
                headerLeft: <HeaderLeft navigation={navigation}/>
            }),
        },
    Info: {
        screen: InfoScreen,
        navigationOptions: {
            title: 'Info'
        }
    },
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            title: 'Welcome Screen'
        }
    },
    Table: {
        screen: TableScreen,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params["Dictionary"]}`
        })
    }
});