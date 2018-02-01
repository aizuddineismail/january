import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import TableComponent from '../components/TableComponent';

export default class TableScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor: '#81CFE0'}}>
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.columnHeader}>Verb Class</Text>
          <Text style={styles.columnData}>{this.props.navigation.state.params["Verb Class"]}</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Dictionary</Text>
          <View style={styles.columnData}>
            {
              this.props.navigation.state.params["Dictionary"].map((item, index) => <Text key={index}>{item}</Text>)
            }
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>-Masu Form</Text>
          <View style={styles.columnData}>
            {
              this.props.navigation.state.params["-Masu Form"].map((item, index) => <Text key={index}>{item}</Text>)
            }
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>English</Text>
          <View style={styles.columnData}>
            {
              this.props.navigation.state.params["English"].map((item, index) => <Text key={index}>{item}</Text>)
            }
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Stem</Text>
          <View style={styles.columnData}>
            {
              this.props.navigation.state.params["Stem"].map((item, index) => <Text key={index}>{item}</Text>)
            }
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Te Form</Text>
          <View style={styles.columnData}>
            {
              this.props.navigation.state.params["Te Form"].map((item, index) => <Text key={index}>{item}</Text>)
            }
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Infinitive</Text>
          <View style={styles.columnData}>
            {
              this.props.navigation.state.params["Infinitive"].map((item, index) => <Text key={index}>{item}</Text>)
            }
          </View>
        </View>

        <View style={styles.row}>
          <View style={{flex: 2, justifyContent: 'flex-start'}}/>
          <View style={{flex: 3, flexDirection: 'row'}}>
              <Text style={styles.innerData}>Plain</Text>
              <Text style={styles.innerData}>Polite</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Present Indicative</Text>
          <TableComponent verb={this.props.navigation.state.params["Present Indicative"]}/>
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Past Indicative</Text>
          <TableComponent verb={this.props.navigation.state.params["Past Indicative"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Imperative</Text>
          <TableComponent verb={this.props.navigation.state.params["Imperative"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Present Progressive</Text>
          <TableComponent verb={this.props.navigation.state.params["Present Progressive"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Past Progressive</Text>
          <TableComponent verb={this.props.navigation.state.params["Past Progressive"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Presumptive \ Volitional</Text>
          <TableComponent verb={this.props.navigation.state.params["Presumptive \\ Volitional"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Past Presumptive</Text>
          <TableComponent verb={this.props.navigation.state.params["Past Presumptive"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Provisional Conditional eba</Text>
          <TableComponent verb={this.props.navigation.state.params["Provisional Conditional eba"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Conditional (-tara form)</Text>
          <TableComponent verb={this.props.navigation.state.params["Conditional (-tara form)"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Potential</Text>
          <TableComponent verb={this.props.navigation.state.params["Potential"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Causative</Text>
          <TableComponent verb={this.props.navigation.state.params["Causative"]} />
        </View>

        <View style={styles.row}>
          <Text style={styles.columnHeader}>Passive</Text>
          <TableComponent verb={this.props.navigation.state.params["Passive"]} />
        </View>

      </View>
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#C5EFF7'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10
  },
  columnHeader: {
    flex: 2,
    justifyContent: 'flex-start',
    fontWeight: 'bold'
  },
  columnData: {
    flex: 3,
  },
  innerData: {
    flex: 1,
    backgroundColor: '#81CFE0'
  },
});
