import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Spline = ({lineNumber}) => {
  const [series, setSeries] = useState(
    (lineNumber === 3)?
      [
        {
          name: 'Doanh thu',
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: 'series2',
          data: [11, 32, 45, 32, 34, 52, 41]
        },
        {
          name: 'series2',
          data: [11, 32, 20, 39, 64, 50, 49]
        }
      ]
      :
      [
        {
          name: 'Doanh thu',
          data: [31, 40, 28, 51, 42, 109, 100]
        }
      ]
  );

  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: 'area'
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'text',
      categories: [
        '9/2022',
        '10/2022',
        '11/2022',
        '12/2022',
        '1/2023',
        '2/2023',
        '3/2023',
        
      ]
    },
    tooltip: {
      x: {
        // format: 'dd/MM/yy HH:mm'
      },
      y: {
        formatter: function(value) {
          return value+ ' Triệu';
        }
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default Spline;
