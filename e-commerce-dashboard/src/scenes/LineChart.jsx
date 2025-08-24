import { ResponsiveLine } from '@nivo/line';

const data = [
  {
    id: 'sales',
    data: [
      { x: 'Jan', y: 100 },
      { x: 'Feb', y: 200 },
      { x: 'Mar', y: 150 },
      { x: 'Apr', y: 300 },
    ],
  },
];

const LineChart = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 50, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false }}
        axisBottom={{
          legend: 'Month',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          legend: 'Sales',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        useMesh={true}
        colors={{ scheme: 'category10' }}
        tooltip={({ point }) => (
          <strong>
            {point.data.x}: {point.data.y}
          </strong>
        )}
      />
    </div>
  );
};
export default LineChart;
