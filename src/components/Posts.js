import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const Posts = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handleClick = (id) => {
    setSelectedPost(id);
  };

  const handleDelete = (id) => {
    // delete the post with the given id
  };

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} className="my-3">
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.content.slice(0, 20)}</Card.Text>
            <Button onClick={() => handleClick(post.id)}>View</Button>
            <Button variant="danger" onClick={() => handleDelete(post.id)}>Delete</Button>
          </Card.Body>
        </Card>
      ))}
      {selectedPost && (
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{posts.find((post) => post.id === selectedPost).title}</Card.Title>
            <Card.Text>{posts.find((post) => post.id === selectedPost).content}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </>
  );
};

export default Posts;
