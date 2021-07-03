import React from 'react'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'

const App=()=>{
  return(
    <div className="container d-flex flex-direction-row">
      <AddContact/>
      <ContactList/>
    </div>
  )
}

export default App;