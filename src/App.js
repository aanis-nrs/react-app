// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Counter from './Counter';
import FormRegistration from './FormRegistration';
import ToDo from './ToDo';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/form">Form Registration</Link>
            </li>
            <li>
              <Link to="/todo">Fetch Data</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/form" element={<FormRegistration />} />
          <Route path="/todo" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
