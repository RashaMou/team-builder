import React from 'react';

const MemberList = (props) => {
  return (
    props.members.map(member => {
      return (
        <div>
          <h3>{member.firstName} {member.lastname}</h3>
          <h4>{member.email}</h4>
        </div>
      )
    })
  )
}

export default MemberList