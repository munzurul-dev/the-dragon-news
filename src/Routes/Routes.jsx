import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import ErrorPage from "../Pages/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement:<ErrorPage></ErrorPage>
  },
]);

export default router;
