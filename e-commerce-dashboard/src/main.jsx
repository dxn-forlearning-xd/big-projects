import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: '#414460ff',
              itemHoverBg: '#1d1f36ff',
              itemHoverColor: '#fff',
              itemColor: '#989898ff',
              itemSelectedBg: '#666982ff',
              itemSelectedColor: '#fff',
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
);
