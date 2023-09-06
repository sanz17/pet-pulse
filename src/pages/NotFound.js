import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const NotFoundPage = () => (
  <Container>
    <Row>
      <Col md={{ span: 6, offset: 3 }}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          The page you are looking for has not been built yet. Lets start coding
        </p>
      </Col>
    </Row>
  </Container>
);

export default NotFoundPage;
