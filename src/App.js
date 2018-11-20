import React from 'react'
import Button from './Button'


const names = ['ala', 'ela', 'ola']
const namesList = names.map(name => <li key={name}> {name}</li>)

const App = (props) => (
  <div>
    <ul>
      {namesList}
    </ul>
    <Button
      label='kliknij mnie'
      onClickHandler={() => alert('klik')} />
    <Button
      label='click me'
      onClickHandler={() => console.log('click')} />
    
  </div>
)

export default App;
