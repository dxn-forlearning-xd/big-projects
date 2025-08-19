import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from '@/components/ui/provider';
import { Theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider appearance="dark">
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
