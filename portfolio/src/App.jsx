import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

import AboutMe from './pages/AboutMe';

function App() {
  const [language, setLanguage] = useState('ja');

  return (
    <Router>
      <Header language={language} setLanguage={setLanguage} />
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />

        <Route path="/about" element={<AboutMe language={language} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
