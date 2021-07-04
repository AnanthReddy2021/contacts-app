import React, { useState } from 'react'
import ContactList from './Components/ContactList'
import NavBar from './Components/NavBar'
import {Redirect, Route,Switch,useLocation} from 'react-router-dom'
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
      {props.state.isLogin?
          <NavBar/>
        :
         <Login/>
      }
    
      {props.state.isLogin&&
      <Switch>
        <PrivateRoute path="/DashBoard">
          <DashBoard/>
        </PrivateRoute>
        <PrivateRoute path="/Contacts">
          <ContactList/>
        </PrivateRoute>
        <Route path="/Logout" component={Logout}/>
        <Route path="/" exact component={Home}/>
        <Route path="*" component={NotFound}/>
      </Switch>
      
    }
    {
      props.state.isLogin&&<Redirect to="/DashBoard"/>
    }
 
    {
      !props.state.isLogin&&<Redirect to="/Login"/>
    }

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