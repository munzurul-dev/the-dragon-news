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
import PrivetRoute from "../Provider/PrivetRoute";
import InfoLayout from "../Layout/InfoLayout";
import Loading from "../Components/Loading";

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
        HydrateFallback: <Loading></Loading>,
        Component: CategoryNews,
      },
      
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
     HydrateFallback: <Loading></Loading>,
   element: <PrivetRoute> <NewsDetails></NewsDetails></PrivetRoute>
  },
  {
    path:"/info",
    Component: InfoLayout,
    children:[
      {
        path:"/info/about",
        Component: About
      },
      {
        path: "/info/career",
        Component: Career
      }
    ]
  }
  
]);

export default router;
