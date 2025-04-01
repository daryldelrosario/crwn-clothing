import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home';

const App = () => {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
};

export default App
