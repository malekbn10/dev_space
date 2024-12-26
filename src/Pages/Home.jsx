import React from 'react'
import { CreatePostForm } from '../Components/Post/CreatePost'
import { PostCard } from '../Components/Post/PostCard'
import { useState, useEffect } from 'react';
import { useMemo } from 'react';

export function Home() {
    const [loading ,setLoading] = useState(false)
    // const myToken =  localStorage.getItem("token")
    const myToken = useMemo(() => localStorage.getItem("token"), []);

    useEffect(() => {
        if (!myToken && !loading) {
            setLoading(true);
        }
    }, [myToken, loading]);

    // useEffect(() => {
    //     console.log("Render triggered. myToken:", myToken);
    // });
    
if (loading) {
    return (<div>Loading ...</div>)
}
  return (
    <div className="max-w-2xl mx-auto py-8">
    {<CreatePostForm />}
    
    <div className="space-y-6">
        {<PostCard/>}
    </div>  
    </div>  )
}
