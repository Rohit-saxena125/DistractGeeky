import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import History from '../src/components/history';
import { Box } from '@mui/material';

import { ChannelDetail, VideoDetail, SearchFeed, Feed } from './components';

ReactDOM.render(

  <Router>
    <Box sx={{ backgroundColor: '#000' }}>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/history' element={<History />} />
      
      
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='/channel/:id' element={<ChannelDetail />} />
        <Route path='/search/:searchTerm' element={<SearchFeed />} />
    
    
    </Routes>
    </Box>
  </Router>,

  document.getElementById('root')
);

