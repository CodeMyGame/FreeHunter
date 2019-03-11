import React, {Component} from 'react';
import { StyleSheet,View} from 'react-native';
import Routes from './routes';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  }
});
