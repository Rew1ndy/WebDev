import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Error } from './components/pages/error/error';
import { User } from './components/pages/user/user';
import { Navigation } from './components/nav/nav';
import { Admin } from './components/pages/admin/admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Navigation /> }>
          <Route index element={<User />} />
          <Route path="admin" element={ <Admin /> } />
          <Route path="error" element={ <Error /> } />
          <Route path="*" element={ <Error /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
