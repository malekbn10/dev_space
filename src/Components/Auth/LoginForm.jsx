// import React, { useEffect, useState } from 'react'
// import { Code2 } from 'lucide-react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';

// export default function LoginForm() {
//     const { loading, error ,userInfo } = useSelector((state) => state.user)
//     const dispatch = useDispatch()
//     const { register, handleSubmit } = useForm()
//     const navigate = useNavigate()

//     useEffect(() => {
//       if (userInfo) {
//         navigate('/home')
//       }
//     }, [navigate, userInfo])
//     const submitForm = (data) => {
//         dispatch(userLogin(data))
//       }

//     const [isSignIn, setIsSignIn] = useState(true);
//   return (
//     <div>
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="text-center">
//           <Code2 className="mx-auto h-12 w-12 text-primary-600" />
//           <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
//             Sign in to DevSpace
//           </h2>
//           <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
//             {isSignIn ? "Don't have an account? " : 'Already have an account? '}
//             <button
//               onClick={() => setIsSignIn(!isSignIn)}
//               className="text-primary-600 hover:text-primary-500"
//             >
//               {isSignIn ? 'Sign up' : 'Sign in'}
//             </button>
//           </p>
//         </div>
//     <form className="mt-8 space-y-6"onSubmit={handleSubmit(submitForm)} >
//       <div className="rounded-md shadow-sm space-y-4">
//         <div>
//           <label htmlFor="email" className="sr-only">Email address</label>
//           <input
//             id="email"
//             type="email"
//             {...register('email')}

//             className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//             placeholder="Email address"
//           />
//           {error.email && (
//             <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
//           )}
//         </div>
//         <div>
//           <label htmlFor="password" className="sr-only">Password</label>
//           <input
//             id="password"
//             type="password"
//             {...register('password')}

//             className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
//             placeholder="Password"
//           />
//           {error.password && (
//             <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
//           )}
//         </div>
//       </div>

//       <button
//         type="submit"
//         disabled={loading}
//         className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50"
//       >
//         Login
//       </button>
//     </form>
//     </div>
//     </div>
//     </div>

//   )
// }
