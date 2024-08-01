import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const Recommendations = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch personalized recommendations from a mock API for testing
    axios.get('https://jsonplaceholder.typicode.com/photos?_limit=40').then(response => {
      const mockProducts = response.data.map(item => ({
        id: item.id,
        name: item.title,
        description: 'This is a description of the product.',
        image: item.url
      }));
      setProducts(mockProducts);
    }).catch(error => {
      console.error("There was an error fetching the data!", error);
    });
  }, []);

  return (
    <Container>
      <Row>
        {products.map(product => (
          <Col key={product.id} md={4}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Recommendations;
