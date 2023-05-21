import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets';
import { Home, CreatePost, CreatePost2 } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className='w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]'>
        <Link to="/">
          <img src={logo} alt="logo" className='w-28 object-contain' />
        </Link>
        
        <div>
          <Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md mr-5'>
            Create Dall-e
          </Link>
          <Link to="/create-post2" className='font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md'>
            Create Midjourney
          </Link>
        </div>
      </header>
      <main className='sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/create-post2" element={<CreatePost2 />} />
        </Routes>
      </main>
    </BrowserRouter> 
  )
}

export default App