import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllSevices/AllServices";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import Details from "../Components/ServiceDetails/Details";
import SignUp from "../Components/SignUp";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/services"),
      },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      {
        path: "allServices",
        element: <AllServices />,
        loader: () => fetch("http://localhost:5000/allServices"),
      },
      {
        path: "/serviceDetails/:id",
        element: <Details />,
        loader: ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`),
      },
    ],
  },
]);
