import React from 'react';
import './Style.css'
import { connect } from 'react-redux';
import {Card,Button} from 'react-bootstrap'
const Home = (props) => {
    const{data}=props
    return (
        <div className="container">
            <div className="row justify-content-center m-2">
                <h2>Welcome to Contact Application</h2>                              
            </div>   
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{
        data:state.contacts
    }
}   
export default connect(mapStateToProps,null)(Home);