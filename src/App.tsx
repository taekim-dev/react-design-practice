import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button, Typography } from './design-system';
import SimpleApi from './pages/SimpleApi';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <nav className="nav">
          <Link to="/">
            <Button variant="secondary" size="medium">Home</Button>
          </Link>
          <Link to="/simple-api">
            <Button variant="primary" size="medium">Simple API Demo</Button>
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={
            <div className="home">
              <Typography variant="h1">Welcome to React Practice</Typography>
              <Typography>Select a demo from the navigation above</Typography>
            </div>
          } />
          <Route path="/simple-api" element={<SimpleApi />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
