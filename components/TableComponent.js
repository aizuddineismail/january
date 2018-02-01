import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class TableComponent extends React.PureComponent {
  render() {
    return (
        <View style={styles.columnData}>
            <View style={styles.innerData}>
              {
                this.props.verb["Plain"].map((item, index) => <Text style={{marginBottom: 5}} key={index}>{item}</Text>)
              }
            </View>
            <View style={styles.innerData}>
              {
                this.props.verb["Polite"].map((item, index) => <Text style={{marginBottom: 5}} key={index}>{item}</Text>)
              }
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  columnData: {
    flex: 3,
    flexDirection: 'row',
    marginBottom: 10    
  },
  innerData: {
    flex: 1,
  }
});
