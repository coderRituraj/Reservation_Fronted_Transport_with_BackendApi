import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import userContext from "./userContext";
import { loginUser } from "./services/user.service";
import { doLogin } from "./auth";
import Navbars from "./Navbars";

const Login = () => {
  const userContextData = useContext(userContext);
  const navigate = useNavigate();

  const [loginDetail, setLoginDetail] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event, field) => {
    let actualValue = event.target.value;

    setLoginDetail({
      ...loginDetail,
      [field]: actualValue,
    });
  };

  const handleReset = () => {
    setLoginDetail({
      username: "",
      password: "",
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (
      loginDetail.username.trim() === "" ||
      loginDetail.password.trim() === ""
    ) {
      toast.error("Username or Password is required!");
      return;
    }

    // Submit the data to the server to generate token
    loginUser(loginDetail)
      .then((data) => {
        console.log(data);
        toast.success("Login successful");

        // Save login details to local storage
        doLogin(data, () => {
          console.log("Login detail is saved to local storage");
          navigate("/home");
        });
      })
      .catch((error) => {
        console.log(error);

        if (error.response.status === 400 || error.response.status === 404) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Something went wrong on the server!");
        }
      });
  };

  return (
    <section id="login">
      <Navbars />

      <div className="flex justify-center items-center p-8 space-y-8">
        <div className="flex w-full">
          <div className="w-1/2 flex justify-center">
            <div className="w-96 p-8 bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-3xl font-bold text-gray-800 text-center">
                Sign in to your account
              </h2>

              <form
                className="space-y-4"
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="rounded-md shadow-sm">
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="off"
                    required
                    value={loginDetail.username}
                    onChange={(e) => handleChange(e, "username")}
                    className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Username"
                  />
                </div>

                <div className="rounded-md shadow-sm">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={loginDetail.password}
                    onChange={(e) => handleChange(e, "password")}
                    className="w-full px-4 py-2 text-gray-900 placeholder-gray-500 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
                    placeholder="Password"
                  />
                </div>

                <div className="flex items-center justify-between text-gray-800">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="w-4 h-4 text-purple-500 border-gray-300 rounded focus:ring-2 focus:ring-purple-500"
                    />
                    <label htmlFor="remember-me" className="ml-2 text-sm">
                      Remember me
                    </label>
                  </div>

                  <a
                    href="#"
                    className="text-sm font-medium hover:text-purple-500"
                  >
                    Forgot your password?
                  </a>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full mt-4 px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-transparent rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Sign in
                  </button>

                  <button
                    onClick={handleReset}
                    className="mt-4 w-full  px-4 py-2 text-sm font-medium text-white bg-purple-500 border border-transparent rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                  >
                    Reset
                  </button>
                </div>
              </form>
              <div className="mt-3 text-center">
                <p className="text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register here
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-gray-100">
            <div className="w-full h-screen flex justify-center ">
              <img
                src="https://partheniumprojects.com/wp-content/uploads/2019/01/Railway-Reservation-System.jpg"
                alt="Train"
                className="h-full object-none"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Login;
