import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
const PrivateRoute = (props) => {
    return (
        <div>
           {props.children}
           {!props.isLogin && <Redirect to="/Login"/>} 
        </div>
    );
};
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        isLogin:state.isLogin
    }
}
export default connect(mapStateToProps,null)(PrivateRoute);