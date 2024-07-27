// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "John"; // Replace with your name or leave it blank

  return (
    <div className="App">
      <Card style={{ width: '18rem', margin: '20px auto' }}>
        <Card.Body>
          <Card.Title><Name /></Card.Title>
          <Card.Text><Price /></Card.Text>
          <Card.Text><Description /></Card.Text>
          <Image />
        </Card.Body>
      </Card>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
            <img src="https://via.placeholder.com/50" alt="Placeholder" />
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
    </div>
  );
};

export default App;
