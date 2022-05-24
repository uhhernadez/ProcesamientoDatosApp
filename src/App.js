import React, { useState, useEffect } from 'react';
import { DescargarDatos, DescargarDatosFC } from './datos';
import * as d3 from 'd3';
import { LineaTiempo } from './graficaTiempo';

const width = 800;
const height = 500;


const Linea = ({datos}) => {
const linea = d3.line()
              .x((p) => p.x)
              .y((p) => p.y);
  return (<path d={linea(datos)} strokeWidth={1} fill="none" stroke="red" />);        
};

/*
function App() {
  const datos = DescargarDatos();  
  const d = DescargarDatosFC();  
  
  if(!datos) {
    return (
      <svg width={width} height={height} >
      </svg>
    );
  }
  
  return (
    <svg width={width} height={height} >
      <Linea datos={datos}/>
    </svg>
  );
}
*/


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
