import Details from "./views/Details";
import Cart from "./views/Cart";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/details/:id", element: <Details /> },
    { path: "/*", element: <NotFound /> },
  ]);
  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}
export default App;
