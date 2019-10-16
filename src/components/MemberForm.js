import React, { useState } from 'react';
import MemberList from './MemberList';

const MemberForm = (props) => {
  // we need form specific state:
  const[member, setMember] = useState({ 
    name: '',
    email: '',
    role: ''
  }) 

  const handleChange = (e) => {
    setMember({...member, [e.target.name]: e.target.value}) // whatever we type in gets set to state by updating the state object. We first copy the object as it was, and then replace one of the key/value pairs with the computed property that comes after. 
    console.log('member from handlechange', member)
  } // member state is now the new object
 
  const onSubmit = (e) => { // update states
    e.preventDefault() 
    props.addNewMember(member) // the argument is the new state that was set via handleChange
    setMember({
      name: '',
      email: '',
      role: ''
    })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor='firstName' />
        <input 
          type='text' 
          name='name'
          id='name'
          placeholder='Name'
          onChange={handleChange}
          value={member.name} // from the initial state object
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
        <label htmlFor='role' />
        <input 
          type='text' 
          name='role'
          id='role'
          placeholder='Role'
          onChange={handleChange}
          value={member.role}
        />
        <button type='submit'>Join Team!</button>
      </form>
      <MemberList members={props.members}/>
    </div>
    
  )
}

export default MemberForm