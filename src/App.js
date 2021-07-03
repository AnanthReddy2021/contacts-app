import React, { useState } from 'react'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'

const App=()=>{
  const [List,setList]=useState([])
  const [item,setItem]=useState({})


  const handleReceive=(data)=>{
    
  }
  const handleRemove=(id)=>{

  }
  const handleEdit=(data)=>{
    console.log(data)
    setItem(data)
  }

  return(
    <div className="d-flex flex-direction-column">
      <AddContact handleReceive={handleReceive} item={item}/>
      <ContactList data={List} handleEdit={handleEdit} handleRemove={handleRemove}/>
    </div>
  )
}

export default App;