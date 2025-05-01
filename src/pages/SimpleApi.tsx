import React, { useState } from 'react';
import { Button, Card, Typography } from '../design-system';
import './SimpleApi.css';

interface Post {
  id: number;
  title: string;
  body: string;
}

const SimpleApi: React.FC = () => {
  const [postId, setPostId] = useState('');
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPost = async () => {
    if (!postId) {
      setError('Please enter a post ID');
      return;
    }

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      if (!response.ok) {
        throw new Error('Post not found');
      }
      const data = await response.json();
      setPost(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setPost(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="simple-api-page">
      <Typography variant="h1">Simple API Demo</Typography>
      
      <div className="input-section">
        <input
          type="text"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
          placeholder="Enter post ID (1-100)"
          className="post-input"
        />
        <Button 
          variant="primary" 
          size="medium" 
          onClick={fetchPost}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Fetch Post'}
        </Button>
      </div>

      {error && (
        <Card variant="outlined" padding="medium">
          <Typography variant="h3" color="#FF4081">Error</Typography>
          <Typography>{error}</Typography>
        </Card>
      )}

      {post && (
        <Card variant="elevated" padding="medium">
          <Typography variant="h3">{post.title}</Typography>
          <Typography>{post.body}</Typography>
        </Card>
      )}
    </div>
  );
};

export default SimpleApi; 