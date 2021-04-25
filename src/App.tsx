import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Taskbox from './Component/Taskbox';
import Button from './Component/Button';
import  {TsBx} from './Component/TsBox';

interface prop{
  // handleChange:string,
  label:string
}
function App(){
  return (
    <div className="App">
     <h3>Taskbox</h3>
     {/* <Button value={"hello"}/> */}
     <TsBx/>
    </div>
  );
}

export default App;
