import { ResponsiveLine } from '@nivo/line';
import { useEffect, useState } from 'react';
import Header from './Header';

const LineChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/carts')
      .then((res) => res.json())
      .then((res) => {
        const points = res.carts.map((cart) => ({
          x: `用户-${cart.userId}`,
          y: cart.discountedTotal,
        }));

        setChartData([
          {
            id: '订单金额',
            data: points,
          },
        ]);
      });
  }, []);

  return (
    <div style={{ height: 400 }}>
      <Header title={'收益趋势'}></Header>

      <ResponsiveLine
        data={chartData}
        margin={{ top: 40, right: 30, bottom: 70, left: 80 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
        axisBottom={{
          legend: '用户',
          legendOffset: 50,
          legendPosition: 'middle',
          tickRotation: -45,
          tickSize: 5,
          tickPadding: 5,
        }}
        axisLeft={{
          legend: '订单金额',
          legendOffset: -60,
          legendPosition: 'middle',
        }}
        colors={{ scheme: 'set2' }}
        pointSize={6}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        enableGridX={false}
        enableGridY={true}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: '#ddd',
              },
            },
            legend: {
              text: {
                fill: '#eee',
                fontSize: 14,
              },
            },
          },
          tooltip: {
            container: {
              background: '#333',
              color: '#fff',
              fontSize: 12,
            },
          },
        }}
        legends={[
          {
            anchor: 'top-right',
            direction: 'column',
            justify: false,
            translateX: 50,
            translateY: 0,
            itemsSpacing: 4,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
          },
        ]}
      />
    </div>
  );
};

export default LineChart;
