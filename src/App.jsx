import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/pages/Landing";
import AllBooks from "./components/pages/AllBooks";
import AddBook from "./components/pages/AddBook";
import LevelDisplay from "./components/pages/LevelDisplay";
import MainPage from "./components/pages/MainPage";
import AuthForm from "./components/pages/AuthForm";

function App() {
  
  return (
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<AllBooks />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/:levelId" element={<LevelDisplay />} />
          <Route path="/auth" element={<AuthForm/>} />
        </Route>
      </Routes>
  );
}

export default App;
