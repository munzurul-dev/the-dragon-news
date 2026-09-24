import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/ CategoryNews";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Login";
import Resgister from "../Pages/Resgister";
import About from "../Pages/About";
import Career from "../Pages/Career";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "categoryNews/:id",
        loader: () => fetch("/news.json"),
        Component: CategoryNews,
      },
      {
        path: "/about",
        Component: About
      },
      {
        path: "/career",
        Component: Career
      }
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Resgister,
      },
    ],
  },
  {
    path:"/news-details/:id",
    loader:()=>fetch("/news.json"),
    Component: NewsDetails
  }
  
]);

export default router;
