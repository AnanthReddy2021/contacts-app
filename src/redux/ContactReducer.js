let initialContact={
    "ID":"",
    "FirstName":"",
    "LastName":"",
    "Mobile":"",
    "EmailID":"",
    "Password":""
}
const initialState={
    contacts:[],
    contact:initialContact,
    isLogin:false
}
const ContactReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case "ADD_CONTACT":{
            const arr=[...state.contacts]
            const max = arr.length===0 ?0:Math.max.apply(null, arr.map(item => item.ID));
            console.log(max)
            const res={...actions.data}
            res["ID"]=max+1
            arr.push(res)                        
            return {...state,contacts:arr,contact:initialContact};

        }
        case "UPDATE_CONTACT":{
            const index=state.contacts.findIndex(item=>item.ID===actions.data.ID);
            const arr=[...state.contacts]
            arr[index]=actions.data
            
            return {...state,contacts:arr,contact:initialContact};

        }
        case "EDIT_CONTACT":{
            return {...state,contact:actions.data};

        }
        case "REMOVE_CONTACT":{
            const arr=state.contacts.filter(item=>item.ID!==actions.id)
            return {...state,contacts:arr};

        }
        case "LOGIN":{
            console.log('Login Successfully !!')
            return {...state,isLogin:true};

        }
        case "LOGOUT":{
            console.log('Logout Success')
            return {...state,isLogin:false};

        }
        default: {
            return state;
        }
    }
}

export default ContactReducer;