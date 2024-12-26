import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { useState } from 'react';



export function PostCard() {
    const [post,setPost] = useState('')
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-4">
      <div className="flex items-center mb-4">
        <img
          src={post.author?.avatar_url || 'https://via.placeholder.com/40'}
          alt={post.author?.full_name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div>
          <Link 
            to={`/profile/${post.author_id}`}
            className="font-semibold text-gray-900 dark:text-white hover:text-primary-600"
          >
            {post.author?.full_name}
          </Link>
          <p className="text-sm text-gray-500">
            {/* {formatDistanceToNow(new Date(post.created_at), { addSuffix: true })} */}now
          </p>
        </div>
      </div>

      <Link to={`/posts/${post.id}`} className="block mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          {/* {post.content.slice(0, 200)}
          {post.content.length > 200 && '...'} */}
        </p>
      </Link>

      <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
        <button 
          className="flex items-center space-x-1 hover:text-primary-600"
        >
          <Heart className="w-5 h-5" />
          <span>{post.likes_count}</span>
        </button>
        <Link 
          to={`/posts/${post.id}`}
          className="flex items-center space-x-1 hover:text-primary-600"
        >
          <MessageCircle className="w-5 h-5" />
          <span>{post.comments_count}</span>
        </Link>
        <button className="flex items-center space-x-1 hover:text-primary-600">
          <Share2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}