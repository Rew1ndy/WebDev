import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, CreateBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import RegistrationForm from "./components/register/register";
import LoginForm from "./components/login/login";
import ProductForm from "./components/products/products";
import CommentForm from "./components/comments/comments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegistrationForm />
  },
  {
    path: "login",
    element: <LoginForm />
  },
  {
    path: "products",
    element: <ProductForm />
  },
  {
    path: "comments",
    element: <CommentForm />
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
