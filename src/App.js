import "./App.css";
import UserContext from "./Context/UserContext";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <div className="App">
      <UserContext>
        <RouterProvider router={routes} />
      </UserContext>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}

export default App;
