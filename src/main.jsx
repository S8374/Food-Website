import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import LoginSignUp from './Components/LoginSignUp/LoginSignUp';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Private from './Components/Private/Private';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <LoginSignUp></LoginSignUp>,
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Header />
          </Private>
        ),
      },
      // Place the loader here on a route where Cards is rendered
      {
        path: "/cards",
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/S8374/MyAPI/refs/heads/main/FoodApi/FoodApi.json"
          ),
        element: <Cards></Cards>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
