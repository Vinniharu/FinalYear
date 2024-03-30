import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/pages/Layout';
import AllBooks from './components/pages/AllBooks';
import Page from './components/pages/Page';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<AllBooks/>}/>
          <Route path='Page' element={<Page/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
