import { BrowserRouter,Routes, Route  } from 'react-router-dom';

import Navbar from './components/Navbar';
import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';

function App() {
  const [title, setTitle] = useState('Floqer')

  return (
    <BrowserRouter>
    <div className="relative bg-[#F1F1F1] h-[240vh]">
      <Navbar title={title}/>
      <Sidebar setTitle={setTitle}/>
      <Routes>
        <Route path='/Line-Graph-Visualization'  element={<Dashboard/>}/>
        {/* <Route path='/analytics'  element={<Analytics/>}/> */}
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
