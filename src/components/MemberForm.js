import React, { useState } from 'react';

const MemberForm = (props) => {
  // we need form specific state:
  const[member, setMember] = useState({ 
    firstName: '',
    lastName: '',
    email: ''
  }) 

  const handleChange = (e) => {
    setMember({...member, [e.target.name]: e.target.value}) // whatever we type in gets set to state by updating the state object. We first copy the object as it was, and then replace one of the key/value pairs with the computed property that comes after. 
    console.log('member from handlechange', member)
  } // member state is now the new object
 
  const onSubmit = (e) => { // update states
    e.preventDefault() 
    const newMember = {
      ...member
    }
    props.addNewMember(newMember) // the argument is the new state that was set via handleChange
    setMember({
      firstName: '',
      lastName: '',
      email: ''
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='firstName' />
        <input 
          type='text' 
          name='firstName'
          id='firstName'
          placeholder='First Name'
          onChange={handleChange}
          value={member.firstName} // from the initial state object
        />
        <label htmlFor='lastName' />
        <input 
          type='text' 
          name='lastName'
          id='lastName'
          placeholder='Last Name'
          onChange={handleChange}
          value={member.lastName}
        />
        <label htmlFor='email' />
        <input 
          type='email' 
          name='email'
          id='email'
          placeholder='Email'
          onChange={handleChange}
          value={member.email}
        />
        <button type='submit'>Join Team!</button>
      </form>
    </div>
    
  )
}

export default MemberForm