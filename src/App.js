import React from 'react';
import {  DescargarDatosFC } from './datos';
import { LineaTiempo } from './graficaTiempo';

const width = 800;
const height = 500;

function App() {
  const d = DescargarDatosFC();  

  if(!d) {
    return (
    <div>
      Loading..
    </div>
    );
  }
  
  return (
    <div>
      <LineaTiempo data={d} width={width} height={height}/>
    </div>
  );
}


export default App;
