import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,
  Button,Alert,Image,ActivityIndicator,FlatList} from 'react-native';
import ProfileSegment from '../components/ProfileSegment';
export default class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count:this.props.count,
      profilesData:[],
      isLoading: true,
      loadingMoreItem: 0,
    }
  }
  static navigationOptions = ({ navigation }) =>{
      return {
         title: `Profile Count : ${navigation.getParam('count')}`
      };
  }
  async componentDidMount() {
      this.props.navigation.setParams({ count: this.state.count });
      var result = [];
      var count = this.state.count;
      if(this.state.count>5){
        count = 5;
        this.setState({
          loadingMoreItem:this.state.count - 5
        })
      }
        for(var i=0;i<count;i++){
          var profile = await this.getProfileFromApi();
          result.push(profile);

        }
        this.setState({
          profilesData:result,
          isLoading:false
        })

  }
  async getProfileFromApi() {
    try {
      let response = await fetch(
        'https://randomuser.me/api',
      );
      let responseJson = await response.json();
      return (responseJson.results)[0];
    } catch (error) {
      console.error(error);
    }
  }
async handleLoadMore(){
  if(this.state.loadingMoreItem>0){
    var result = this.state.profilesData;
      for(var i=0;i<this.state.loadingMoreItem;i++){
        var profile = await this.getProfileFromApi();
        result.push(profile);

      }
      this.setState({
        profilesData:result,
        loadingMoreItem:0
      })
  }
}
  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <FlatList
         onEndReached={this.handleLoadMore.bind(this)}
         onEndReachedThreshold={0.5}
         initialNumToRender={5}
         keyExtractor={({id}, index) => `${id}`}
         data={this.state.profilesData}
         renderItem={({item}) => <ProfileSegment name={`${item.name.first} ${item.name.last}`}
         address = {`${item.location.street} ${item.location.city} ${item.location.state} ${item.location.postcode}`}
         emailId = {item.email}
         mobileNo ={item.cell}
         title={item.name.title}
         picture={item.picture.medium}
         dataOfRegister = {item.registered.date}
         />}
       />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
