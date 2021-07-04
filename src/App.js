import React, { useState } from 'react'
import ContactList from './Components/ContactList'
import NavBar from './Components/NavBar'
import {Route,Switch} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
import { connect } from 'react-redux'
import Logout from './Components/Logout'
import PrivateRoute from './Components/PrivateRoute'
import DashBoard from './Components/DashBoard'

const App=(props)=>{
  

  return(
    <div>
      <NavBar/>
      <Switch>
        <PrivateRoute path="/DashBoard">
          <DashBoard/>
        </PrivateRoute>
        <PrivateRoute path="/Contacts">
          <ContactList/>
        </PrivateRoute>
        <Route path="/Login" component={Login}/>
        <Route path="/Logout" component={Logout}/>

        <Route path="/" exact component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
    </div>
  )
}
const mapStateToProps=(state)=>{
  console.log(state)
  return{
    state
  }
}

export default connect(mapStateToProps,null)(App);