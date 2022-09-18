import React from 'react';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import { MintPage } from './components/mint/MintPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route exact path='/mint' element={<MintPage />} />
      </Routes>
    </div>
  );
}

export default App;
