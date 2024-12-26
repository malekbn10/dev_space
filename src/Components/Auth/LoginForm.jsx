import React, {  useState } from 'react'
import { Code2 } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { userLogin } from './../../redux/actions/authAction';
import toast from 'react-hot-toast';

export default function LoginForm() {
    const [user,setUser] = useState({'email' : '' , 'password' : ''})
    //for redux
    // const userInfo  = useSelector((state) => state.user)
    // const dispatch = useDispatch()
        
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     dispatch(userLogin({ ...user}));
    //     setUser({  email: '', password: '' });
    //     };
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
        };

const login = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const req= await axios.post('http://localhost:8080/auth/login',{email,password}).then(
        response =>{
          console.log(response);
          
            setUser({email,password})
            const token = response.data.token
          localStorage.setItem('token',token)
          const name = response.data.fname
          localStorage.setItem('name',name)
          
        toast.success(`Welcome back ${response.data.fname} !`)
        navigate('/home')

        }
    ).catch(
      error=>{
        // console.log(error);
        toast.error("Invalid Credentials" ,error.message)
        // toast.error(`${error.response.data.message}`)
        
      }
    )
    return req;

  };


    // const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Code2 className="mx-auto h-12 w-12 text-primary-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to DevSpace
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Don't have an account? 
            <button
              className="text-primary-600 hover:text-primary-500"
            >
              <Link to="/register">
              Sign up
              
              </Link>
            </button>
          </p>
        </div>
    <form className="mt-8 space-y-6" onSubmit={login} >
      <div className="rounded-md shadow-sm space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">Email address</label>
          <input
            id="email"
            type="email"
            name='email'
            onChange={handleChange}

            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Email address"
          />
          {/* {error.email && (
            <p className="mt-1 text-sm text-red-600">{error.email.message}</p>
          )} */}
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input
            id="password"
            type="password"
            name='password'
            onChange={handleChange}

            className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            placeholder="Password"
          />
          {/* {error.password && (
            <p className="mt-1 text-sm text-red-600">{error.password.message}</p>
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

  )
}
