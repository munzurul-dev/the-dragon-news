import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/ CategoryNews";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        index:true,
        Component: Home,
      },
      {
         path:"categoryNews/:id",
         loader: ()=> fetch("/news.json"),
         Component: CategoryNews,
      }
    ]
    
  },
]);

export default router;
