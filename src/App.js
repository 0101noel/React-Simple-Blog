import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import Footer from './components/Footer';
import Home from './components/Home';
import Posts from './components/Posts';
import Create from './components/Create';

const App = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the third post.' },
  ]);

  const handleCreateSubmit = (post) => {
    setPosts([...posts, { id: posts.length + 1, ...post }]);
    setShowCreate(false);
  };

  return (
    <>
      <Container className="my-3">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
          <Button variant="primary" className="mx-2" onClick={() => setShowCreate(true)}>Home</Button>
          <Button variant="primary" className="mx-2" onClick={() => setShowCreate(true)}>Create</Button>
          <Button variant="primary" className="mx-2" onClick={() => setShowCreate(true)}>Post</Button>
          <Form className="mx-2">
            <Form.Group controlId="search">
              <Form.Control type="text" placeholder="Search" />
            </Form.Group>
          </Form>
          <Button variant="primary" className="mx-2">Search</Button>
        </div>
        <Home />
        <Posts posts={posts} />
        {showCreate ? <Create onSubmit={handleCreateSubmit} /> : <Button onClick={() => setShowCreate(true)}>Create Post</Button>}
      </Container>
      <Footer />
    </>
  );
};

export default App;
