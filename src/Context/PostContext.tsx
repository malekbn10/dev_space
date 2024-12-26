import React, { createContext, useContext, useState } from 'react';
import { Post } from '../types';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

// interface PostContextType {
//   posts: Post[];
//   addPost: (content: string, images?: string[]) => void;
//   likePost: (postId: string) => void;
// }

const PostContext = createContext(null);


export const PostProvider =({ children }) => {
  
  const [posts, setPosts] = useState([]);
  const [token, setToken] = useState('');

  const mytoken = localStorage.getItem("token")
  if(mytoken)
    setToken(mytoken)
    const addPost = async (content: string, images?: string[]) => {
      
    const newPost: Post = {
      id: String(posts.length + 1),
      userId: jwtDecode(token)["id"],
      content,
      likes: 0,
      comments: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),

      images,
    };
    await axios.post('http://localhost:8080/publications' , {newPost}).then(
      response =>{
        if(response.status === 201){
    setPosts([newPost, ...posts]);

        }
      }
    )
  }
  
  const likePost = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ));
  };
  return (
    <PostContext.Provider value={{ posts, addPost, likePost }}>
      {children}
    </PostContext.Provider>
  );
};

  export const usePosts = () => {
        const context = useContext(PostContext);
        if (!context) {
          throw new Error('usePosts must be used within a PostProvider');
        }
        return context;
      };
    