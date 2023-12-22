// import { useState } from 'react'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Client from "./Client";
import Admin from "./Admin";
import Page403 from './pages/Admin/400/Page403';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<Page403 />} />
        {/* Add more routes here */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
