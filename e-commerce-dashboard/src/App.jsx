import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './scenes/Dashboard';
import TopBar from './global/TopBar';
import SideBar from './global/SideBar';
import Products from './scenes/Products';
import Orders from './scenes/Orders';
import Contacts from './scenes/Contacts';
import BarChart from './scenes/BarChart';
import PieChart from './scenes/PieChart';
import LineChart from './scenes/LineChart';

function App() {
  return (
    <div>
      <main style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
        <SideBar />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            margin: '20px',
          }}
        >
          <TopBar />

          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/barchart" element={<BarChart />} />
              <Route path="/piechart" element={<PieChart />} />
              <Route path="/linechart" element={<LineChart />} />
            </Routes>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
