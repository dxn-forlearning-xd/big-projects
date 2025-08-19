import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import PageLayouts from './Layouts/PageLayout/PageLayouts';

function App() {
  return (
    <PageLayouts>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </PageLayouts>
  );
}

export default App;
