import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/auth-context";

const Landing = React.lazy(() => import("./components/pages/Landing"));
const AllBooks = React.lazy(() => import("./components/pages/AllBooks"));
const AddBook = React.lazy(() => import("./components/pages/AddBook"));
const LevelDisplay = React.lazy(() =>
  import("./components/pages/LevelDisplay")
);

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

export default App;
