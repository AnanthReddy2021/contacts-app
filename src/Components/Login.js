import React,{useState} from 'react';
import {connect} from 'react-redux'
import {Login,Logout} from '../redux/ContactActions'
import {Redirect} from 'react-router-dom'


const LoginPage = (props) => {
    const[data,setData]=useState({
        "User":"",
        "Password":""
    }) 
    const [err,setErr]=useState(false)
    const handleSubmit=()=>{
        if(data.User==="admin" && data.Password==="admin"){
            setErr(false)
            props.LoginSuccess()
        }else{
            setErr(true)
            props.LoginFail()
        }
    }
    const handleChange=(name,value)=>{
        const res={...data}
        res[name]=value
        setData(res)
    }
    return (
        <div className="container col-sm-8">
            <div className="row justify-content-center m-2">
                <h2>Login Form</h2>
            </div>
            <div className="container col-sm-8">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="User Name">User Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        value={data.User}
                        onChange={(e)=>{handleChange("User",e.target.value)}}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Pasword">Password</label>
                    <input type="password" 
                           className="form-control"
                           value={data.Password}
                        onChange={(e)=>{handleChange("Password",e.target.value)}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                {
                    err&&
                    <div className="alert alert-danger mt-2" role="alert">
                        Invalid userName / Password !
                    </div>                
                }
                <div className="m-3 text-danger">
                    *** note: username and password is <span style={{fontWeight:"bold"}}>admin</span> 
                </div>
            </div>
            {props.state.isLogin&&<Redirect to="/DashBoard"/>}
             
        </div>
    );
};
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        LoginSuccess:()=>{dispatch(Login())},
        LoginFail:()=>{dispatch(Logout())}

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);