import React from 'react';
import { RouterProvider } from "react-router-dom";
import { router } from './routes.js';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
