import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home/Home";
import Topicos from "./Components/Topicos/Topicos.jsx";
import Conceitos from "./Components/Conceitos/Conceitos.jsx";
import Usinas from "./Components/Usinas/Usinas.jsx";
import Finalizacao from "./Components/Finalizacao/Finalizacao.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/topicos",
        element: <Topicos />,
      },
      {
        path: "/conceitos",
        element: <Conceitos />,
      },
      {
        path: "/usinas",
        element: <Usinas />,
      },
      {
        path: "/finalizacao",
        element: <Finalizacao />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
