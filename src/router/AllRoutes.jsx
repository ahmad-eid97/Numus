//== React router
import { createBrowserRouter } from "react-router-dom";
//== Pages
import { Home, Login } from "../pages";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  }
])

export default router;