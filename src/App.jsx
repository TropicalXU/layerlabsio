import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Main, ScrollTop } from './components';
import './index.css';


const App = () => {

  return (
    <BrowserRouter>
      <ScrollTop>
        <div>
          <Main />
        </div>
      </ScrollTop>
    </BrowserRouter>
  );
}

export default App
