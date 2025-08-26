import { ResponsivePie } from '@nivo/pie';
import { useEffect, useState } from 'react';
import Header from './Header';

const PieChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((res) => {
        const methods = ['支付宝', '微信', '信用卡'];
        const counts = { 支付宝: 0, 微信: 0, 信用卡: 0 };

        res.carts.forEach((cart) => {
          const method = methods[Math.floor(Math.random() * methods.length)];
          counts[method] += 1;
        });

        const data = Object.entries(counts).map(([id, value]) => ({
          id,
          label: id,
          value,
        }));

        setChartData(data);
      });
  }, []);

  return (
    <div style={{ height: 400 }}>
      <Header title={'支付方式比例'}></Header>

      <ResponsivePie
        data={chartData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#ffffffff"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
      />
    </div>
  );
};

export default PieChart;
