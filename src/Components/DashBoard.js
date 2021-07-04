import React from 'react';
import './Style.css'
import { connect } from 'react-redux';

const DashBoard = (props) => {
    const{data}=props
    return (
        <div className="container">
            <div className="row justify-content-center m-2">
                <h2>Welcome to Home Page</h2>                              
            </div> 
            <div className="row justify-content-center m-2">
                    <button type="button" className="btn btn-primary">
                        Total Customers <span className="badge badge-light ml-3 ">{data.length}</span>
                    </button>
            </div>
            
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{
        data:state.contacts
    }
}   
export default connect(mapStateToProps,null)(DashBoard);