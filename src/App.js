import React,{ useState } from 'react';
import './App.css';
import MemberForm from './components/MemberForm';
import MemberList from './components/MemberList';


function App() {
  // app-wide state
  const [members, setMembers] = useState([]) //initial state is set to an empty array, i.e. no members set yet. 

  // we need to update the members array with each new member passed in from the form:
  const addNewMember = banana => {
    setMembers([...members, banana])
    console.log('App.js: members', members)
  } // we pass this function down as props to the MemberForm, and the new state it returns (i.e. members) to MemberList

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm addNewMember={addNewMember} members={members}/>
    </div>
  );
}

export default App;
