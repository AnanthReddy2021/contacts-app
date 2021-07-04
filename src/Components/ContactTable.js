import React,{useState} from 'react';
import './Style.css'
import { connect } from 'react-redux';
import {RemoveContact,EditContact,UpdateContact} from '../redux/ContactActions'
import AddContactModal from './AddContactModal'



const ContactTable = (props) => {
    const {data,handleEdit,handleDelete}=props
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleSubmit = (data) => {
        setShow(false)
        props.handleUpdate(data)
        
    };


    return (
        <div className="col-sm-12 tableFixHead">
        <table className="table table-sm table-striped header-fixed">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">FirstName</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Email</th>
                    <th scope="col">{" "}</th>
                    <th scope="col">{" "}</th>

                </tr>
            </thead>
            <tbody >
                {
                    data!==undefined&&data.map((item)=>(
                        <tr key={item.ID}>
                            <td scope="col">{item.ID}</td>
                            <td scope="col">{item.FirstName}</td>
                            <td scope="col">{item.LastName}</td>
                            <td scope="col">{item.Mobile}</td>
                            <td scope="col">{item.EmailID}</td>
                            <td scope="col"><button onClick={()=>{
                                setShow(true)
                                handleEdit(item)
                            }}  className="btn btn-danger">Edit</button></td>
                            <td scope="col"><button onClick={()=>{handleDelete(item.ID)}}  className="btn btn-danger">Remove</button></td>

                        </tr>
                    ))
                }
               
            </tbody>
        </table>
        <AddContactModal title={"Update Contact"} show={show} handleClose={handleClose} handleSubmit={handleSubmit}/>       
    </div>  
    );
};


const mapDispatchToProps=(dispatch)=>{
    return{
        handleEdit:(data)=>{dispatch(EditContact(data))},
        handleDelete:(id)=>{dispatch(RemoveContact(id))},
        handleUpdate:(data)=>{dispatch(UpdateContact(data))}

    }
}
export default connect(null,mapDispatchToProps)(ContactTable);