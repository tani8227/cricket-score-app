import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Admin from './pages/AdminPanel.jsx';
import Player from './pages/Player.jsx';


const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <nav style={{ marginBottom: '2rem' }}>
        <Link to="/admin" style={{ marginRight: '1rem' }}>Admin</Link>
        <Link to="/player">Player</Link>
      </nav>

      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
