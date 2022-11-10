import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import AllServices from "../Components/AllSevices/AllServices";
import Blog from "../Components/Blog/Blog";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";
import Login from "../Components/Login";
import AddReview from "../Components/Reviews/AddReview";
import SingleReview from "../Components/Reviews/SingleReview";
import Details from "../Components/ServiceDetails/Details";
import SignUp from "../Components/SignUp";
import EditReview from "../Components/UserReview/EditReview";
import UserReview from "../Components/UserReview/UserReview";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://cloud-kitchen-server-puce.vercel.app/services"),
      },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
      {
        path: "allServices",
        element: <AllServices />,
      
      },
      {
        path: "/serviceDetails/:id",
        element: <Details />,
        loader: ({ params }) =>
          fetch(
            `https://cloud-kitchen-server-puce.vercel.app/serviceDetails/${params.id}`
          ),
      },

      {
        path: "/userReview",
        element: (
          <PrivateRoute>
            <UserReview />
          </PrivateRoute>
        ),
      },
      {
        path: "/serviceReview",
        element: <SingleReview />,
      },
      {
        path: "/addReview/:id",
        element: (
          <PrivateRoute>
            <AddReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cloud-kitchen-server-puce.vercel.app/service/${params.id}`
          ),
      },
      {
        path: "/editReview/:id",
        element: (
          <PrivateRoute>
            <EditReview />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://cloud-kitchen-server-puce.vercel.app/review/${params.id}`
          ),
      },
      {
        path: "/AddService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },
]);
