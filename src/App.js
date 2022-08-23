import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

//styles
import { GlobalStyle } from './GlobalStyle';

import Header from './components/Header';
import Home from './components/Home'


const App=()=>(
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      {/* <Home/> */}
      <GlobalStyle/>
    </Router>
  );

export default App;
