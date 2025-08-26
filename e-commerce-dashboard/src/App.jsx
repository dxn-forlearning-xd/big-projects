import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import SideBar from './global/SideBar';
import Inventory from './scenes/Inventory';
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
          <div>
            <Routes>
              <Route path="/" element={<Inventory />} />
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
