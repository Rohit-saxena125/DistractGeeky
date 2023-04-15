import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './index.css'
import App from './App';
import Login from "./pages/Login";
import Signup from "./pages/Signup";

ReactDOM.render(

  <Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route  path='/login'element={<Login />} />
          <Route  path='/signup'element={<Signup/>} />
    </Routes>
  </Router>,

  document.getElementById('root')
);
