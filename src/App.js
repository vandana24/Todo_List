import React from 'react';
import home from './views/home/index'
import './App.css';

import { Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Route path="/" exact={true} component={home} />
      </BrowserRouter>
    </div>
  );
}

export default App;