export const AddContact=(data)=>{
    return{
        "type":"ADD_CONTACT",
        "data":data
    }
}

export const UpdateContact=(data)=>{
    return{
        "type":"UPDATE_CONTACT",
        "data":data
    }
}

export  const EditContact=(data)=>{
    return{
        "type":"EDIT_CONTACT",
        "data":data
    }
}

export  const RemoveContact=(id)=>{
    return{
        "type":"REMOVE_CONTACT",
        "id":id
    }
}