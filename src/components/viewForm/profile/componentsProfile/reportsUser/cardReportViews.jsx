import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { CDBContainer } from 'cdbreact';
import {Chart, ArcElement} from 'chart.js'

import "./cardReportViews.css"
Chart.register(ArcElement);

function CardReportViews(){
  const [data] = useState({
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(194, 116, 161, 0.5)',
        borderColor: 'rgb(194, 116, 161)',
        data: [65, 59, 90, 81, 56, 55, 40],
      }
    ],
  });
  return (
    <div className="container-reports-views">
      <div className="container-top-reports">

      </div>
      <CDBContainer className="container-reports">
        <h3 className="mt-5">Reports view</h3>
        <Doughnut className="container-img" data={data} options={{ responsive: true }} />
      </CDBContainer>
    </div>
    
  )
}

export default CardReportViews