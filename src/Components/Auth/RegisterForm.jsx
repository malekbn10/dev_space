import axios from "axios";
import { Code2 } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
// import { useDispatch, useSelector } from "react-redux";
// import { registerUser } from "../../redux/actions/authAction";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterForm() {
  // const [isSignIn, setIsSignIn] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    LastName: "",
    email: "",
    password: "",
  });

  // const userInfo = useSelector(
  //   (state) => state.auth
  // );

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = async (e) => {
    e.preventDefault();
    const { firstName, LastName, email, password } = user;

    // const apiUrl = process.env.REACT_APP_API_BASE_URL;
    // console.log(apiUrl?.length);
    try {
      const data = await axios.post("http://localhost:8080/auth/register", {
        firstName,
        LastName,
        email,
        password,
      });
      let msg = data.data.statusCode;
      console.log(msg);

      if (!(msg = "200")) {
        console.log("invalid credential");
      } else {
        setUser({});
        toast.success('Sign in Successful , Please Sign up !')
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // const dispatch = useDispatch();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(registerUser(user));
  //   setUser({ email: "", password: "", firstName: "", LastName: "" });
  // };
  // useEffect(() => {
  //   if (!userInfo) navigate("/login");
  //   // if (userInfo) navigate("/home");
  // }, [navigate, userInfo]);

  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Code2 className="mx-auto h-12 w-12 text-primary-600" />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Create your account
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?

              <button className="text-primary-600  hover:text-primary-500">
                <Link to="/login">
                
              Sign In
                </Link>
              </button>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={registerUser}>
            <div className="rounded-md shadow-sm space-y-4">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="First name"
                />
              </div>
              <div>
                <label htmlFor="LastName" className="sr-only">
                  Last Name
                </label>
                <input
                  id="LastName"
                  name="LastName"
                  type="text"
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Last name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Email address"
                />
                {/* {error.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {error.email.message}
                  </p>
                )} */}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Password"
                />
                {/* {error.password && (
                  <p className="mt-1 text-sm text-red-600">
                    {error.password.message}
                  </p>
                )} */}
              </div>
            </div>

            <button
              type="submit"
              // disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
