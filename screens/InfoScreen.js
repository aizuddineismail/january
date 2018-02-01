import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'

export default class InfoScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#81CFE0'}}>
      <ScrollView>      
        <View style={styles.container}>
          <View style={styles.row}>
            <Text style={styles.title}>Term</Text>
            <Text style={styles.explanation}>Explanation</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Present Indicative</Text>
            <Text style={styles.info}>The indicative mood is for ordinary, objective statements of fact. The present tense is used for incomplete habitual actions as well as for future intentions</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Past Indicative</Text>
            <Text style={styles.info}>The past indicative mood is actions completed in the past (I ate, I worked etc) and also for the equivalent of the present perfect in English (I have eaten, I have worked etc)</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Imperative</Text>
            <Text style={styles.info}>For giving commands. Generally too abrupt for most situations other than telling off children or husbands but can be softened by adding "please" (kudasai)</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Present Progressive</Text>
            <Text style={styles.info}>Used for action in progress, continuous action, state of being. Also used to express the same meaning as the English present perfect.{'\n'}{'\n'}Unlike English it cannot be used for future intention (tomorrow I'm eating out, I'm going out later etc)</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Past Progressive</Text>
            <Text style={styles.info}>Used for past continuous action or state of being.</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Presumptive{'\n'}Voltional</Text>
            <Text style={styles.info}>Generally used to express probability, belief or intention.{'\n'}Can also be used to express intention as in "Let's..."</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Past Presumptive</Text>
            <Text style={styles.info}>Generally used to express probability or belief regarding the past.</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Provisional Conditional eba</Text>
            <Text style={styles.info}>Used for the situations where "If" might be used in English.</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Conditional{'\n'}(-tara form)</Text>
            <Text style={styles.info}>Used for wide range of conditional and if meanings, past occurence, hypothesis etc</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Potential</Text>
            <Text style={styles.info}>Expresses the idea of ability or cabability</Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Causative</Text>
            <Text style={styles.info}>Expresses the idea of making or causing someone to do something. My mum made me clean my room etc.
            {'\n'}{'\n'}It can also mean "let" or "allow". Please let me play!
            </Text>
          </View>

          <View style={styles.row}>
            <Text style={styles.term}>Passive</Text>
            <Text style={styles.info}>The passive - like in English - is used when something is done to someone/something by someone/something else. My bag was stolen, He hit me etc{'\n'}{'\n'}
            The passive can also be used in a slightly different way in Japanese to express when something regrettable happens to someone. Eg. rather than saying Fred's mother died (Fred san no okasan shinimashita) the passive could be used to express regret over the situation: Fred san wa okasan ni shinarimashita
            </Text>
          </View>
        </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#C5EFF7'
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10
  },
  term:{
    flex:1,
    fontWeight: 'bold'
  },
  info: {
    flex: 3
  },
  explanation: {
    flex: 3,
    fontSize: 20,
    fontWeight: 'bold'
  },
  title:{
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold'
  }  
});
