import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import DiplomaList from './DiplomaList';
import Diploma from './Diploma';
import EnrolmentForm from './EnrolmentForm';
import Favourites from './Favourites';
import FAQ from './FAQ';
import Header from './Header';
import SearchBar from './SearchBar';

function App() {
  const [favourites, setFavourites] = useState([]);

  const addFavourite = (course) => {
    setFavourites([...favourites, course]);
  };

  return (
    <Router>
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home title="Welcome to Republic Polytechnic" />} />
        <Route path="/diplomas" element={<DiplomaList addFavourite={addFavourite} />} />
        <Route path="/diplomas/:diplomaId" element={<Diploma />} />
        <Route path="/register" element={<EnrolmentForm />} />
        <Route path="/favourites" element={<Favourites favourites={favourites} />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<h1 className="not-found">Page Not Found</h1>} />
      </Routes>
      <footer className="container">
        &copy;2022 | <a href="https://www.rp.edu.sg/">Republic Polytechnic</a>
      </footer>
    </Router>
  );
}

export default App;