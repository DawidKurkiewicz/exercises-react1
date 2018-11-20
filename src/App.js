import React from 'react'


const names = ['ala', 'ela', 'ola']
const namesList = names.map(name => <li key = {name}> {name}</li>)

const App = (props) => (
  <div>
    <ul>
      {namesList}
    </ul>
  </div>
)

export default App;
