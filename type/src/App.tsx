import React from 'react';

import './App.css';
import { CreateManage, OtherFuntionAsFC } from './Children';
import { GuestList } from './Create';
import EventComponent from './evets/events';
import { SearchCode } from './Filter';
import { SonOne } from './practice';
import { ToPracticeLeastFC, ToPracticeMore } from './Practice.More';

function App() {
  return (
    <div className="App">
      <h1>Testing more things here</h1>
      <OtherFuntionAsFC name='felipe' age={28} nickname='martins' onClick={() =>console.log("testing my click here")} >
       to pay more attention my brother!!

      </OtherFuntionAsFC>
      
      <CreateManage name='programmer' nickname='martins' age={40} 
      onClick={() => console.log("click different here now")}  />

      <SonOne name='Programer Floripa' age={40} email='programmerfelipe'
      onClick={ () => console.log("click here on another function!!")}  >
        <h2> Testing more one tag component</h2>

      </SonOne>


      <GuestList/>
      <SearchCode/>
      <br/>
      <EventComponent/>
      <br/>


      <ToPracticeLeastFC name='felipe' email='machadofelipe2016'  
       cellphone={89530193} onClick={() => console.log("testing here my another button")}>

       <h2>here more one time</h2>

      </ToPracticeLeastFC>

    
    </div>
  );
}

export default App;
