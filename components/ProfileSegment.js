import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,
  Button,Alert,Image} from 'react-native';

export default class ProfileSegment extends React.Component {
  constructor(props){
    super(props);
    var newButtonDisplay;
    var dataOfRegister = this.props.dataOfRegister;
    var dataOfRegisterMonth =  dataOfRegister.substring(5, 7);
    var dataOfRegisterYear =  dataOfRegister.substring(0, 4);
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    if(year===dataOfRegisterYear && (month - dataOfRegisterMonth)===1){
      newButtonDisplay = ''
    }else{
      newButtonDisplay='none'
    }
    this.state={
      newButtonDisplay:newButtonDisplay
    }
  }

  render() {

    return (
      <View style={styles.container} key={this.props.mobileNo}>
          <View style={{flexDirection:'row',height:200,backgroundColor:'#fff',borderRadius:5,margin:10}}>
          <View style={{flex:1,alignItems:'center',marginTop:28}}>
            <Image
              style={{width: 100, height: 100,borderRadius:100/2}}
              source={{uri: this.props.picture}}
            />
            <Text>{this.props.title}</Text>
            <View style={{display:this.state.newButtonDisplay}}>
              <Button title="New"/>
            </View>
          </View>
          <View style={{flex:2}}>
            <Text style={{marginTop:20,fontSize:30}}>{this.props.name}</Text>
            <Text style={{marginTop:3,fontSize:15}}>{this.props.emailId}</Text>
            <Text style={{marginTop:10,fontSize:15}}>{this.props.mobileNo}</Text>
            <Text style={{marginTop:10,fontSize:15}}>{this.props.address}</Text>
          </View>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
