import React, { useState } from 'react'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'

const App=()=>{
  const [List,setList]=useState([])

  const handleReceive=(data)=>{
    const max = List.length===0 ?0:Math.max.apply(null, List.map(item => item.ID));
    console.log(max)
    const res={...data}
    res["ID"]=max+1
    const arr=[...List]
    arr.push(res)
    setList(arr)
  }
  return(
    <div className="d-flex flex-direction-row">
      <AddContact handleReceive={handleReceive}/>
      <ContactList data={List}/>
    </div>
  )
}

export default App;