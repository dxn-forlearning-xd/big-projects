import { ResponsivePie } from '@nivo/pie';

const data = [
  { id: 'Shoes', value: 120 },
  { id: 'Hats', value: 80 },
  { id: 'Shirts', value: 150 },
];
const PieChart = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={1}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333"
        arcLinkLabelsThickness={2}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
        tooltip={({ id, value }) => (
          <strong>
            {id}: {value}
          </strong>
        )}
      />
    </div>
  );
};

export default PieChart;
