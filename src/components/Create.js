import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const Create = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="formBasicContent">
        <Form.Label>Content</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter content" value={content} onChange={(e) => setContent(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">Save</Button>
    </Form>
  );
};

export default Create;
