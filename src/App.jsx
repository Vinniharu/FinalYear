import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/context/auth-context";

const Landing = React.lazy(() => import("./components/pages/Landing"));
const AllBooks = React.lazy(() => import("./components/pages/AllBooks"));
const AddBook = React.lazy(() => import("./components/pages/AddBook"));
const LevelDisplay = React.lazy(() =>
  import("./components/pages/LevelDisplay")
);
const MainPage = React.lazy(() => import('./components/pages/MainPage'))

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<AllBooks />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/:levelId" element={<LevelDisplay />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
