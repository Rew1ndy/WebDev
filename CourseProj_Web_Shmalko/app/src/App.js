import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './components/pages/home/Home';
import { Header } from './components/layout/header/Header';
import { ErrorPage } from './components/layout/error/ErrorPage';
import Store from './components/pages/store/Store';
import Footer from './components/footer/Footer';
import DefaultTable from './components/pages/store/default-table/Default-table';
import TableDetails from './components/pages/store/table-details/Table-details';
import Cart from './components/pages/store/cart/Cart';
import OrderConfirmation from './components/pages/store/confirmation/OrderConfirmation';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Store",
    element: <Store />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Cart",
    element: <Cart />,
    errorElement: <ErrorPage />
  },
  {
    path: "/order-confirmation",
    element: <OrderConfirmation />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Store/:tableType/:tableName",
    element: <TableDetails />,
    errorElement: <ErrorPage />
  },
  {
    path: "/Store/:tableType",
    element: <DefaultTable />,
    errorElement: <ErrorPage />
  },
]);

function App() {
  return (
    <>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </>
  );
}

export default App;
