import { ResponsiveBar } from '@nivo/bar';

const data = [
  { product: 'Shoes', sales: 120 },
  { product: 'Hats', sales: 80 },
  { product: 'Shirts', sales: 150 },
];

const BarChart = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={['sales']}
        indexBy="product"
        margin={{ top: 20, right: 20, bottom: 50, left: 60 }}
        padding={0.3}
        colors={{ scheme: 'nivo' }}
        axisBottom={{
          legend: 'Product',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          legend: 'Sales',
          legendPosition: 'middle',
          legendOffset: -40,
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
