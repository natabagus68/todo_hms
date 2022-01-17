import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './App';
import Post from './page/postdata/Post';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="post/:id" element={<Post />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
);
