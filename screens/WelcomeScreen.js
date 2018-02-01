import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { SocialIcon } from 'react-native-elements'

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <View style={{flex: 1}}>
            <Icon 
              name="star"
              type="font-awesome"
              color="yellow"
              size={35}
            />
          </View>
          <Text style={styles.title}>はじめまして{'\n'}こんにちは！</Text>
          <View style={{flex: 1}}>
            <Icon 
              name="star"
              type="font-awesome"
              color="yellow"
              size={35}
            />
          </View>
          
        </View>

        <View style={styles.messageWrapper}>
          <Text style={styles.message}>Thank you for using this application
          {'\n'}This application is made by referring to
          {'\n'}www.japaneseverbconjugator.com
          {'\n'}I hope this app will be helpful to everyone
          {'\n'}ありがとうございます！
          </Text>
        </View>

        <View style={styles.socialMediaWrapper}>
          <Text style={styles.message}>For any inquiry, you may find me at:</Text>
          <View style={styles.row}>
            <SocialIcon
              type='twitter'
            />
            <Text style={styles.message}>@aizuddineismail</Text>
          </View>

          <View style={styles.row}>
            <SocialIcon
              type='google-plus-official'
            />
            <Text style={styles.message}>aizuddineismail@gmail.com</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5EFF7',
  },
  titleWrapper:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#81CFE0'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#f368e0'
  },
  messageWrapper: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#52B3D9'
  },
  message: {
    textAlign: 'center',
    fontSize: 20,
    color: '#D91E18'
  },
  socialMediaWrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#81CFE0'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  }
});
