import './App.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from './components/home/Home';
import { Header } from './components/header/Header';
import { ErrorPage } from './components/error-page/ErrorPage';
import { About } from './components/about/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/About",
    element: <About />,
    errorElement: <ErrorPage />
  }
])

function App() {
  return (
    <>
    <Header />
    <main>
      <RouterProvider router={router} />
    </main>
    </>
  );
}

export default App;
