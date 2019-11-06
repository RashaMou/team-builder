import React, { useState } from 'react';

const MemberList = (props) => {
  // const [memberToEdit, setMemberToEdit] = useState([])

  // const editMember = currentMember => {
  //   setMemberToEdit(currentMember)
  //   console.log('membertoedit', memberToEdit)
  // } //memberToeEdit gets set correctly, but I get a 'too many renders' error


  return (
    props.members.map(member => {
      console.log('memberlist member', member)
      return (
        <div>
          <h3>{member.name}</h3>
          <h4>{member.email}</h4>
          <h4>{member.role}</h4>
          {/* <button onClick={editMember(member)}>Edit</button> */}
        </div>
      )
    })
  )
}

export default MemberList