import React, { useState, useEffect } from 'react';
import { DescargarDatos } from './datos';
import * as d3 from 'd3';

const width = 500;
const height = 500;


const Linea = ({datos}) => {
const linea = d3.line()
              .x((p) => p.x)
              .y((p) => p.y);
  return (<path d={linea(datos)} strokeWidth={1} fill="none" stroke="red" />);        
};

function App() {
  const datos = DescargarDatos();  
  
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

export default App;
