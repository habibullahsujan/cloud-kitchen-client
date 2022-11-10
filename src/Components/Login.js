import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/UserContext";
import useTitle from "../Hooks/useTitle";
import { jwtToken } from "../Utilities/jwtToken";
import { Vortex } from "react-loader-spinner";

const Login = () => {
  useTitle("Login");
  const { signInUser, signInUsingGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleLogin = (e) => {
    setLoading(true);
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoading(false);
        const currentUser={
          email:user.email
        }
        jwtToken(currentUser);
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((error) => {
        toast.error('wrong password or wrong email');
        setLoading(false)

       
        console.log(error);
      });
  };

  const handleLoginWithGoogle = () => {

    signInUsingGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser={
          email:user.email
        }
        jwtToken(currentUser);
        navigate(from, { replace: true });
        toast.success("Login Success");
      })
      .catch((error) => {
        toast.error(error);
        navigate(from, { replace: true });
        console.error(error);
      });
  };
  return (
    <div className="my-10">
      {loading ? (
        <div className="flex justify-center items-center h-[100vh]">
          <Vortex
            visible={true}
            height="80"
            width="80"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={["red", "green", "blue", "yellow", "orange", "purple"]}
          />
        </div>
      ) : (
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl mx-auto bg-white text-black">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleLogin}
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-400">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border border-sky-700 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md text-black border border-sky-700 focus:dark:border-violet-400"
              />
              <div className="flex justify-end text-xs dark:text-gray-400">
                <Link>Forgot Password?</Link>
              </div>
            </div>
            <button
              type="submit"
              className=" text-white px-8 py-3 font-semibold rounded border border-sky-700 w-full transition ease-in-out delay-150 bg-sky-700 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
            >
              Login
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
            <p className="py-2 text-sm border border-sky-800 text-gray-700 w-full text-center">
              Login with social accounts
            </p>
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleLoginWithGoogle}
              aria-label="Log in with Google"
              className="p-3 rounded-sm border border-sky-800 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-xs text-center sm:px-6 dark:text-gray-400">
            Don't have an account?
            <Link to={"/signUp"} className="underline dark:text-gray-100">
              Sign up
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;
