import { ResponsiveBar } from '@nivo/bar';
import { useEffect, useState } from 'react';
import Header from './Header';
import { Typography } from 'antd';

const BarChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((res) => {
        const data = res.products
          .map((p) => ({ product: p.title, stock: p.stock }))
          .sort((a, b) => a.stock - b.stock)
          .slice(0, 10);

        setChartData(data);
      });
  }, []);

  return (
    <div style={{ height: 400 }}>
      <Header title={'库存数据'}></Header>

      <ResponsiveBar
        data={chartData}
        keys={['stock']}
        indexBy="product"
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        axisBottom={{
          legend: '商品',
          legendPosition: 'middle',
          legendOffset: 32,
          tickRotation: 30,
        }}
        axisLeft={{
          legend: '库存',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#ffffffff',
                fontSize: 14,
              },
            },
            legend: {
              text: {
                fill: '#ffffffff',
                fontSize: 16,
                fontWeight: 600,
              },
            },
          },
        }}
        tooltip={({ id, value, indexValue }) => (
          <strong>
            {indexValue}: {value}
          </strong>
        )}
      />
    </div>
  );
};

export default BarChart;
