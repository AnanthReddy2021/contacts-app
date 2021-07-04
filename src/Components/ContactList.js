import React,{useState,useEffect} from 'react';
import ContactTable from './ContactTable';
import {AddContact as Add,UpdateContact} from '../redux/ContactActions'
import { connect } from 'react-redux';
import AddContactModal from './AddContactModal'




const ContactsList = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [input,setInput]=useState("")
    const [contactList,setcontactList]=useState([])


    const handleSearch=()=>{
        if(input!==""){
            const data=props.data.filter((item)=>{
                const itemData = `${item.ID}
                                  ${item.FirstName.toUpperCase()} 
                                  ${item.LastName.toUpperCase()} 
                                  ${item.Mobile} 
                                  ${item.EmailID.toUpperCase()}`;
                                  
                const textData = input.toUpperCase();    
                return itemData.includes(textData);
            })
            setcontactList(data)
        }else{
            setcontactList(props.data)
        }
    }

    useEffect(() => {
        if(props.data!==undefined){
            setcontactList(props.data)
        }
    }, [props])
    const handleSubmit = (data) => {
        setShow(false)
        if(data.ID===""){
            props.handleSave(data)
        }else{
            props.handleUpdate(data)
        }
    };


    return (
        <div className="container">
            <div className="row justify-content-center m-2">
                <h2>Contacts List</h2>
            </div> 
            <div className="d-flex justify-content-between m-2">
                <div className="d-flex flex-row col-sm-4">
                    <input type="text" 
                        className="form-control border border-secondary" 
                        placeholder="Search"
                        value={input}
                        onChange={(e)=>{setInput(e.target.value)}}
                    />
                    <button onClick={()=>{handleSearch()}} className="btn btn-primary ml-2">Search</button>
                </div>
                <button onClick={()=>{setShow(true)}} className="btn btn-primary">Add Contact</button>
            </div>
          
            <div className="col-sm-12">
                <ContactTable data={contactList}/>
            </div>
            <AddContactModal title={"Add Contact"} show={show} handleClose={handleClose} handleSubmit={handleSubmit}/>
            
                 
        </div>
    );
};

const mapStateToProps=(state)=>{
    return{
        data:state.contacts
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        handleSave:(data)=>{dispatch(Add(data))},
        handleUpdate:(data)=>{dispatch(UpdateContact(data))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ContactsList);