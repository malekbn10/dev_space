import React from 'react';
import { Github, Linkedin, MapPin, Link as LinkIcon } from 'lucide-react';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export function Profile() {
  console.log('hello');
  
  const [user,setUser] = useState({
    name:"",
    email:""
  
  })




useEffect(async()=>{
  
  const myToken = localStorage.getItem('token')
  if (!myToken) {
    return
  }
  const userId = jwtDecode(myToken)['email']

  await axios.get(`http://localhost:8080/users/${userId}`).then(res=>{
    setUser({
      name:res.data.firstName + res.data.LastName , email:userId
    })
  })
},[user])
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
        <div className="relative h-48">
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80"
            alt="Cover"
            className="w-full h-48 object-cover rounded-t-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="Profile"
            className="absolute bottom-0 left-6 transform translate-y-1/2 w-24 h-24 rounded-full border-4 border-white dark:border-gray-800"
          />
        </div>
        
        <div className="pt-16 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600 dark:text-gray-400 flex items-center mt-1">
                <MapPin className="w-4 h-4 mr-1" />
                San Francisco, CA
              </p>
            </div>
            <div className="flex space-x-2">
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-2 text-gray-600 hover:text-primary-600 dark:text-gray-400"
                aria-label="Portfolio"
              >
                <LinkIcon className="w-6 h-6" />
              </a>
            </div>
          </div>

          <p className="mt-4">
            Full-stack developer passionate about React, Node.js, and building great user experiences.
            Currently working on open-source projects and learning Rust.
          </p>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'PostgreSQL'].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-100 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-3">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2].map((project) => (
                <div
                  key={project}
                  className="border dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="font-semibold">Project Name</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    A brief description of the project and its main features.
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <a href="#" className="text-primary-600 hover:underline text-sm">
                      View on GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}