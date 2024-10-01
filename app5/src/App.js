import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UserContext, UserProvider } from './Contexts/UserContext';
import { ProductProvider } from './Contexts/ProductContext';
import Categories from './components/Products/Categories';
import Product from './components/Products/Products';
import DebugWindow from './components/DebugWindow';
import useNavigationHistory from './Hooks/useNavigationHistory';

function Header() {
  const { userName } = useContext(UserContext);
  return <h1>Welcome, {userName}!</h1>;
}

function App() {
  const { navigationHistory, addPage } = useNavigationHistory();
  
  return (
    <UserProvider>
      <ProductProvider>
        <Router>
          <Header />
          <nav>
            <Link to="/" onClick={() => addPage('Home')}>Home</Link>
            <Link to="/categories" onClick={() => addPage('Categories')}>Categories</Link>
          </nav>
          <Routes>
            <Route path="/" element={<h1>Welcome to the Store</h1>} />
            <Route path="/categories" element={<Categories addPage={addPage} />} />
            <Route path="/product/:category/:productName" element={<Product />} />
          </Routes>
          <DebugWindow history={navigationHistory} />
        </Router>
      </ProductProvider>
    </UserProvider>
  );
}

export default App;
