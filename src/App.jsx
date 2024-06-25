import React from "react";
import Approuter from "./assets/common/AppRouter";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter(Approuter);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
