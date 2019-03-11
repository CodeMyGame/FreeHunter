import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Profile from './screens/Profile';
import Home from './screens/Home';

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "home" component = {Home} title = "Profile Filtering"  initial = {true}  />
         <Scene key = "profile" component = {Profile} title = "Profile Count" />
      </Scene>
   </Router>
)
export default Routes
