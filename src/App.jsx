import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/pages/Layout';
import AllBooks from './components/pages/AllBooks';
import AddBook from './components/pages/AddBook';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<AllBooks/>}/>
        <Route path='/Add' element={<AddBook/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
