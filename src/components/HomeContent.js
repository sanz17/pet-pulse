import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import Cute from "../assets/images/cute.jpg"

const HomeContent = () => {
  return (
    <Container className="my-5" style={{'backgroundColor':'pink','borderRadius':'10px','paddingBottom':'39px','paddingTop':'20px','paddingLeft':'33px'}}>
      <Row className="mb-4">
        <Col className="text-center">
          <h1>Guides for You</h1>
          <p style={{ 'fontSize': '20px' }}>
            Trying to keep tabs on your pet's vitals, whereabouts, and more?
          </p>
        </Col>
      </Row>

      <Row className="align-items-center">
        <Col md={6}>
          <h1>Start your pet's fitness journey today!</h1>
          <p>
            Sign up for PetPulse and get started on the path to a healthier
            lifestyle.
          </p>
          <Button
            variant="dark"
            className="me-2"
            as={Link}
            to="/pages/register"
          >
            Register
          </Button>
          <Button variant="outline-dark" as={Link} to="/pages/login">
            Login
          </Button>
        </Col>
        <Col md={5}>
          <img
            src={Cute}
            alt="Banner"
            className="img-fluid"
            style={{'borderRadius':'167px'}}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
