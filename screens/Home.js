import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,
  Button,Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
export default class Home extends React.Component {

  constructor(){
    super();
    this.state = {
      text:''
    }
  }

  handleInputChange = (text) => {
      if(text>=0 && text<=9){
        this.setState({
          text: text
        });
      }
  }
onPressNext = () =>{

  if(this.state.text.length!=0){
    Actions.profile(
      {
        count:this.state.text
      }
    );
  }else{
    Alert.alert("Enter Profiles count!!");
  }

}
  render() {
    return (
      <View style={styles.container}>
      <TextInput
        style={{width:'100%',height:50,marginTop:20,borderBottomWidth:1}}
        placeholder="Profiles count "
        onChangeText={this.handleInputChange}
        maxLength = {1}
        value={this.state.text}
        keyboardType='numeric'
      />
      <Text>Please specify the number of profiles you want to display</Text>
      <View style={{flex: 1,
        width:80,
        position:'absolute',
        bottom: 20,
      right:20}}>
          <Button
            onPress={this.onPressNext}
            title="Next"
          />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
    backgroundColor:'white'
  }
});
