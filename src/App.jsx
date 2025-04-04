import { Routes, Route, Outlet } from 'react-router-dom';

import Home from './routes/home/home';

const Shop = () => {
  return (
    <h1>I Am The Shop Page</h1>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App
