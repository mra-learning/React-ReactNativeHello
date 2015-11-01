/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView,
  TouchableHighlight,
} = React;
    
    var MyList = React.createClass( {
        getInitialState: function () {
            var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
            return {
            dataSource: ds.cloneWithRows(['row 1', 'row 2']),
            };
        },
            
        render: function () {
            return (
                <ListView
                dataSource={ this.state.dataSource }
                renderRow={(rowData) => <Text> { rowData }</Text>}/>
            );
        }
    });    

var myapp = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          hello
        </Text>
        <MyList/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('myapp', () => myapp);
