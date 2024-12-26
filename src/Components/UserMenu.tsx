import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogOut, User } from "lucide-react";
import { jwtDecode } from "jwt-decode";
export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()
  const [token, setToken] = useState();
  const [user,setUser] = useState({
    name:"",
    email:"",
    avatar:""
  })
  const location  = useLocation();
  const {pathname } = location;
  const mt =localStorage.getItem("token")
  const name =localStorage.getItem("name")
  if (mt && name){ 
    setToken(mt);    
  // const decodedname:string = jwtDecode(token);
  // const decodedemail:string = jwtDecode(token)['email'];
  setUser(prev =>({
    ...prev.user,name:name,email:name

  }))
}

  if (!mt ) {
    if (pathname === "/login") {
      return (
        <Link
          to="/register"
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Sign Up
        </Link>
      );
    }else{
      return (
        <Link
          to="/login"
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Sign In
        </Link>
      );
    }
    
  }
  const logout =() =>{
    localStorage.removeItem("token")
    navigate('/login')
  }
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <img
          src={user.avatar}
          alt={user.name}
          className="w-8 h-8 rounded-full"
        />
        <span>{user.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-1">
          <Link
            to="/profile"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <User className="w-4 h-4 mr-2" />
            Profile
          </Link>
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-red-600"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
