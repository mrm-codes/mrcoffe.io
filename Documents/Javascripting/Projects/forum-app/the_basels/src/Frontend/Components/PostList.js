import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/dash.css';

function PostList({activeThreadId, threadId}) {
  const [posts, setPosts] = useState([]);

  
  // Fetch posts from an API or local storage
  useEffect(() => {
    // Fetch threads from the backend API
    const fetchPosts = async () => {
      try {
        
        const response = await axios.get('http://localhost:3006/api/threads/posts');
        const fetchedData = response.data.filter((post) => post.threadId === activeThreadId);
        setPosts(fetchedData);
        console.log('Filtered posts:', fetchedData);
   
      } catch (error) {
        console.error('Error fetching threads', error);
      }
    };

    fetchPosts();
  },[activeThreadId]);

  
  
  return (
    <div className='post-list'>
      {
        posts.map((post) =>(
          <div key={post.id} className='post-list-item' id={`post-threadId-${post.threadId}`}>
            <p>{post.content}</p>
            <div className='details'>
              <p>Created by: {post.User.username}</p>
              <p>Created at: {new Date(post.createdAt).toLocaleString()}</p>
              
            </div>

          </div>
        ))
      }
      
        
    </div>
    
  )
};

export default PostList;