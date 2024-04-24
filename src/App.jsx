import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllBooks from './components/pages/AllBooks';
import AddBook from './components/pages/AddBook';
import LevelDisplay from './components/pages/LevelDisplay';
import Landing from './components/pages/Landing';
import { AuthProvider } from './components/context/auth-context';

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Home" element={<AllBooks />} />
          <Route path="/Add" element={<AddBook />} />
          <Route path="/:levelId" element={<LevelDisplay />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App
