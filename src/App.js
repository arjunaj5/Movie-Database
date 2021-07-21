import React from 'react';

// Componenets
import {GlobalStyle} from './GlobalStyle'
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const App = () => (
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>             {/*route with movie component*/}
        <Route path='/:movieId' element={<Movie />} />   {/*(useParams) route with movie component*/}
        <Route path='/*' element={<NotFound />} />     {/*route with movie component*/}
      </Routes>
      
    </Router>
  );

export default App;
