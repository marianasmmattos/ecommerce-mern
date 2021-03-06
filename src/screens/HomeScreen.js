import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product/Product';
import products from '../products';

const HomeScreen = () => {
  return (
    <div>
      <h1>Últimos Lançamentos</h1>
      <Row>
        {products.map((p) => (
          <Col>
            <Product product={p}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
