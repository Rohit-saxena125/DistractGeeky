import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Recommend from './components/Recoomendation';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Plan from '../src/components/Plan';
import { Box } from '@mui/material';
import { ChannelDetail, VideoDetail, SearchFeed, Feed } from './components';
import App from './App';
// import Logout from './components/Logout';s
import Practice from './components/practice';
ReactDOM.render(
  <Router>
    <Box sx={{ backgroundColor: '#c2eaba',backgroundImage: 'linear-gradient(319deg, #c2eaba 0%, #c5f4e0 37%, #efc2cf 100%)' }}>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login'   element={<Login auth={true} />} />
        <Route  path='/recommendation' element={<Recommend />} />
        
        {/* <Route path='/logout' element={<Logout />} /> */}
        
        
        <Route path='/plan' element={<Plan />} />
        <Route  path='/home/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
        <Route path='channel/:id' element={<ChannelDetail />} />
        <Route path='search/:searchTerm' element={<SearchFeed />} />
        <Route path='/practice' element={<Practice />} />
        {/* </Route> */}
      </Routes>
    </Box>
  </Router>,
  document.getElementById('root')
);