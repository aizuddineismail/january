import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default class WordComponent extends React.PureComponent {
  render() {
      const color = this.props.index%2 === 0 ? styles.first : styles.second
    return (
        <View style={color}>
            <View style={styles.container}>
                <View style={styles.data}>
                    {
                        this.props.item["Dictionary"].map((item, index) => <Text key={index}>{item}</Text>)
                    }
                </View>
                <View style={styles.data}>
                    {
                        this.props.item["-Masu Form"].map((item, index) => <Text key={index}>{item}</Text>)
                    }
                </View>
                <View style={styles.data}>
                    {
                        this.props.item["English"].map((item, index) => <Text key={index}>{item}</Text>)
                    }
                </View>    
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Table', {...this.props.item})}>
                    <View style={styles.nextButton}>
                        <Icon
                            name="navigate-next"
                            type="material-icon"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        padding: 10
    },
    data: {
        flex: 3,
        alignItems: 'flex-start'
    },
    nextButton: {
        flex: 2,
        justifyContent: 'center'
    },
    first: {
        backgroundColor: '#81CFE0'
    },
    second: {
        backgroundColor: '#C5EFF7'
    }
});
