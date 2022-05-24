import { useRef } from "react";
import * as d3 from 'd3'

export const LineaTiempo = ({data, width, height}) => {
  const margin = {top: 30, right: 30, bottom: 30, left: 60};
  width = width - margin.left - margin.right;
  height = height - margin.top - margin.bottom;
  const svgRef = useRef();
  console.log(width, height);
  let svg = d3.select(svgRef.current);

  svg.append("g")
    .attr("transform", "translate("+margin.left+","+margin.top+")");

  const xscale = d3.scaleTime()
    .domain(d3.extent(data, (d) => d.fecha ))
    .range([ 0, width ]);
    
  svg.append("g")
    //.attr("transform", "`translate(0," + height + ")`")
    .attr("transform", "translate(50," + height + ")")
    .call(d3.axisBottom(xscale));

  let y = d3.scaleLinear()
      .domain( [0, 300])
      .range([ height, 0 ]);

  svg.append("g")
      .attr("transform", "translate(50," + 0 + ")")
      .call(d3.axisLeft(y));

  d3.select(svgRef.current).append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "#69b3a2")
    .attr("stroke-width", 1.5)
    .attr("transform", "translate(50," + 0 + ")")
    .attr("d", d3.line()
      .x(function(d) { return xscale(d.fecha) })
      .y(function(d) { return y(d.valor) })
      );

  return (
    <svg ref={svgRef} width={width+ + margin.left + margin.right} height={height+ margin.top + margin.bottom} >
    </svg>
  );
};
