import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UrlForm from './components/UrlForm';
import UrlList from './components/UrlList';
import UrlStats from './components/UrlStats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UrlForm />} />
        <Route path="/urls" element={<UrlList />} />
        <Route path="/statistics" element={<UrlStats />} />
      </Routes>
    </Router>
  );
}

export default App;
