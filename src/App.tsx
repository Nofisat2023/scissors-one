import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './component/navbar';
import Home from './component/Home';
import ShortUrl from './component/Short-url';
import QrCode from './component/QrCode';

function App() {
  return (
    <section className='container'>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route  path="/" element={<Home/>} />
      <Route  path="/shortUrl" element={<ShortUrl />} />
      <Route  path="/qrCode" element={<QrCode/>} />
    </Routes>
    </BrowserRouter>
    </section>
  );
}

export default App;
