import React, { useState } from 'react';
const AddContact = (props) => {
    const [data,setData]=useState({
        "ID":"",
        "FirstName":"",
        "LastName":"",
        "Mobile":"",
        "EmailID":"",
        "Password":"",
    })
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        props.handleReceive(data)
    }
    const handleChange=(name,value)=>{
        const res={...data};
        res[name]=value;
        setData(res)
    }
    return (
        <div className="col-sm-4 m-2 p-2 ">
            <div className="row justify-content-center m-2">
                <h2>Add Contact</h2>
            </div> 
            <div>
                <form onSubmit={handleSubmit}>
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
                   
                   
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>       
        </div>
    );
};

export default AddContact;