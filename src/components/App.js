import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import DiplomaList from './components/DiplomaList';
import Diploma from './components/Diploma';
import EnrolmentForm from './components/EnrolmentForm';
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Welcome to Red30 Tech" />} />
        <Route path="/diplomas" element={<DiplomaList />} />
        <Route path="/diplomas/:diplomaId" element={<Diploma />} />
        <Route path="/register" element={<EnrolmentForm />} />
        <Route
          path="*"
          element={<h1 className="not-found">Page Not Found</h1>}
        />
      </Routes>

      <footer className="container">
        &copy;2022 | <a href="https://red30tech.com/">Red30 Tech</a>
      </footer>
    </div>
  );
}

export default App;