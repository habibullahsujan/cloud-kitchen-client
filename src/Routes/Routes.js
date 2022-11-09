import { createBrowserRouter } from "react-router-dom";
import AllServices from "../Components/AllSevices/AllServices";
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/serviceDetails/${params.id}`),
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
          fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: "/editReview/:id",
        element: <EditReview />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/review/${params.id}`),
      },
    ],
  },
]);
