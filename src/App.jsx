import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllBooks from './components/pages/AllBooks';
import AddBook from './components/pages/AddBook';
import LevelDisplay from './components/pages/LevelDisplay';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllBooks />} />
        <Route path="/Add" element={<AddBook />} />
        <Route path="/100level" element={<LevelDisplay activeLevel="100" />} />
        <Route path="/200level" element={<LevelDisplay activeLevel="200" />} />
        <Route path="/300level" element={<LevelDisplay activeLevel="300" />} />
        <Route path="/400level" element={<LevelDisplay activeLevel="400" />} />
        <Route path="/500level" element={<LevelDisplay activeLevel="500" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
