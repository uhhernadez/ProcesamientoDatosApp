import { useState, useEffect } from 'react';
import * as d3 from 'd3'

const csvUrl = 'db/Casos_Diarios_Municipio_Confirmados_20220407.csv';

export const DescargarDatos = () => {
  const [datos, actualizaDatos ] = useState(null); 
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = () => {
    d3.csv(csvUrl).then(data => {
      let casos_diarios = [ ];
      console.log(data[752].nombre);
      for ( let i = 3 ; i < data.columns.length; i++) {
        console.log(data.columns[i]);
        casos_diarios[i -3] = { x:i-3, y:500-data[752][data.columns[i]]};
      }
      actualizaDatos(casos_diarios);
    });
  }

  return datos;  
}

export const DescargarDatosFC = () => {
  const [datos, actualizaDatos ] = useState(null); 
  useEffect(() => {
    fetchData();
  }, []); 

  const fetchData = () => {
    d3.csv(csvUrl).then(data => {
      let casos_diarios = [ ];
      //for ( let i = 3 ; i < data.columns.length; i++) {
      for ( let i = 3 ; i < 200; i++) {
        // Dia mes año
        casos_diarios[i -3] = { fecha:  d3.timeParse("%d-%m-%Y")(data.columns[i]) , valor:data[752][data.columns[i]]};
        console.log(casos_diarios[i -3]);
      }
      actualizaDatos(casos_diarios);
    });
  }

  return datos;  
}