import React from 'react'
import Button from './Button'


const names = ['ala', 'ela', 'ola']
const namesList = names.map(name => <li key = {name}> {name}</li>)

const App = (props) => (
  <div>
    <ul>
      {namesList}
    </ul>
   <Button
   label = 'kliknij mnie'
   alertText='klikniete'
   />
   <Button
   label = 'click me'
   alertText = 'clicked'
   />
  </div>
)

export default App;
