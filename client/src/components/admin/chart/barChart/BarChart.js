import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const [series] = useState([{ data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380] }]);
  const [options] = useState({
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: ['Loa', 'Tivi', 'Pin dự phòng', 'Chuột, bàn phím', 'Cáp, củ sạc', 'Tai nghe', 'Smartwatch',
        'Tablet', 'Máy tính', 'Điện thoại'
      ],
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default BarChart;
