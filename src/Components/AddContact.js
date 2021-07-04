import React, { useState,useEffect } from 'react';
import { connect } from 'react-redux';

const AddContact = (props) => {
    const [data,setData]=useState(props.contact)

    useEffect(() => {
        setData(props.contact)
    }, [props])

    const handleChange=(name,value)=>{
        const res={...data};
        res[name]=value;
        setData(res)
    }
    return (
        <div className="col-sm-11">
            <div>
                <form>
                    <div className="form-group">
                        <label htmlFor="First Name">First Name</label>
                        <input type="text" 
                               className="form-control border border-secondary" 
                               placeholder="Enter First Name" 
                               value={data.FirstName}
                               onChange={(e)=>{handleChange("FirstName",e.target.value)}} 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Last Name">Last Name</label>
                        <input  type="text" 
                                className="form-control border border-secondary" 
                                placeholder="Enter Last Name"
                                value={data.LastName}
                                onChange={(e)=>{handleChange("LastName",e.target.value)}} 
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailID">Email ID</label>
                        <input type="text" 
                               className="form-control border border-secondary" 
                               placeholder="Enter Email ID"
                               value={data.EmailID}
                               onChange={(e)=>{handleChange("EmailID",e.target.value)}} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="PhoneNumber">Mobile Number</label>
                        <input type="text" 
                                className="form-control border border-secondary" 
                                placeholder="Enter Mobile Number"
                                value={data.Mobile}
                                onChange={(e)=>{handleChange("Mobile",e.target.value)}} 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input type="password" 
                                className="form-control border border-secondary" 
                                placeholder="Enter Password"
                                value={data.Password}
                                onChange={(e)=>{handleChange("Password",e.target.value)}} 
                        />
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-secondary mr-2" onClick={()=>{props.handleClose()}}>Close</button>
                        <button className="btn btn-primary" onClick={()=>{
                            props.handleSubmit(data)
                        }}>Submit</button>
                    </div>
                </form>
            </div>       
        </div>
    );
};
const mapStateToProps=(state)=>{
    return{
        contact:state.contact
    }
}


export default connect(mapStateToProps,null)(AddContact);