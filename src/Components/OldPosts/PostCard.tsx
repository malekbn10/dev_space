// import React from 'react';
// import { formatDistanceToNow } from 'date-fns';
// import { MessageSquare, ThumbsUp, Share2 } from 'lucide-react';
// import { Post } from '../../types';
// import { usePosts } from '../../Context/PostContext';

// interface PostCardProps {
//   post: Post;
// }

// const PostCard=({ post }: PostCardProps)=> {
//   const { likePost } = usePosts();

//   return (
//    <div>
//      <article className="bg-white dark:bg-gray-800 rounded-lg shadow">
//       <div className="p-6">
//         <div className="flex items-center space-x-3">
//           <img
//             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
//             alt="Profile"
//             className="w-10 h-10 rounded-full"
//           />
//           <div>
//             <h3 className="font-semibold">John Doe</h3>
//             <p className="text-sm text-gray-500">
//               {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
//             </p>
//           </div>
//         </div>
//         <p className="mt-4">{post.content}</p>
        
//         {post.images && post.images.length > 0 && (
//           <div className="mt-4 grid grid-cols-2 gap-2">
//             {post.images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Post image ${index + 1}`}
//                 className="rounded-lg w-full h-48 object-cover"
//               />
//             ))}
//           </div>
//         )}

//         <div className="mt-4 flex items-center space-x-4">
//           <button 
//             onClick={() => likePost(post.id)}
//             className="flex items-center space-x-1 text-gray-500 hover:text-primary-600"
//           >
//             <ThumbsUp className="w-5 h-5" />
//             <span>{post.likes}</span>
//           </button>
//           <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600">
//             <MessageSquare className="w-5 h-5" />
//             <span>{post.comments}</span>
//           </button>
//           <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600">
//             <Share2 className="w-5 h-5" />
//             <span>Share</span>
//           </button>
//         </div>
//       </div>
//     </article>
//    </div>
//   );
// }
// export default PostCard