import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Tooltip from "./Components/Tooltip";
import Table from "./Components/Table";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component() {
        return (
          <>
            <Navbar />
            <Home />
          </>
        );
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "/tooltip",
      Component() {
        return (
          <>
            <Navbar />
            <Tooltip />
          </>
        );
      },
      errorElement: <div>Error</div>,
    },
    {
      path: "/table-layout",
      Component() {
        return (
          <>
            <Navbar />
            <Table />
          </>
        );
      },
      errorElement: <div>Error</div>,
    },
  ]);
  return <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />;
}

export default App;
