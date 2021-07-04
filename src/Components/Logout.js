import React,{ useEffect } from 'react';
import {Redirect} from 'react-router-dom'
import { connect } from 'react-redux';
import {Logout as SignOut} from '../redux/ContactActions'
const Logout = (props) => {
    useEffect(()=>{
        props.Logout()
    },[props])
    return <Redirect to="/Login"/>
};
const mapDispatchToProps=(dispatch)=>{
    return{
        Logout:()=>{dispatch(SignOut())}
    }
}
export default connect(null,mapDispatchToProps)(Logout);