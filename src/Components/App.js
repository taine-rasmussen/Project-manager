import React from 'react';
import { Route, Routes  } from 'react-router-dom';

// Components
import Login from './Login/Login'
import Landing from './Landing/Landing'

const App = () => {
  return (
    <div className="App" stlye={{height: '100vh', width: '100vw'}}>
      <Routes>
        <Route exact path="/" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
