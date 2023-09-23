import React from 'react'
import Chart from "react-apexcharts";
import { useState } from 'react';
function Stats() {
    const [chartstate,setChartstate]=useState(
        {
          options: {
            colors:['#00bfff','#00ffbf'],
            chart: {
              id: "Comparison"
            },
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          },
          series: [
            {
              name: "Brand New Cars",
              data: [1130, 740, 1245, 1650, 1049, 960, 870, 591,1106]
            },
            {
              name: "Second Hand Cars",
              data: [935, 1345, 1140, 1055, 1241, 1265, 1076, 1140,1198]
            }
          ]
        }
    )
  return (
    <div>
      <h3>Here are Stats of company selling Brand new and Second hand cars </h3>
      <Chart
              options={chartstate.options}
              series={chartstate.series}
              type="area"
              width="600"
              colors={chartstate.colors}
            />
    </div>
  )
}

export default Stats
