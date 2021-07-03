import React from 'react'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'

const App=()=>{
  return(
    <div className="container">
      <AddContact/>
      <ContactList/>
    </div>
  )
}

export default App;