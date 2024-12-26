import React, { useState } from 'react';
import FileUpload  from '../FileUpload.tsx';
import  {usePosts}  from '../../Context/PostContext.tsx'

const CreatePost=()=> {
  const [content, setContent] = useState('');
  const [files, setFiles] = useState([]);
const addPost = usePosts();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      // In a real app, we would upload files to a storage service
      // and get back URLs to store with the post
      const fileUrls = files.map(file => URL.createObjectURL(file));
      addPost(content, fileUrls);
      setContent('');
      setFiles([]);
    }
  };

  const handleFileSelect = (fileList: FileList | null) => {
    if (fileList) {
      setFiles(prev => [...prev, ...Array.from(fileList)]);
    }
  };

  const handleRemoveFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Share your thoughts, ask a question, or start a discussion..."
          className="w-full p-4 rounded-lg bg-gray-50 dark:bg-gray-700 border-0 focus:ring-2 focus:ring-primary-500"
          rows={3}
        />
        
        <FileUpload
          files={files}
          onFileSelect={handleFileSelect}
          onRemoveFile={handleRemoveFile}
        />

        <div className="mt-4 flex justify-end">
          <button 
            type="submit"
            className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Post
          </button>
        </div>
      </form>
    </div>
    </div>
  );
}
export default CreatePost