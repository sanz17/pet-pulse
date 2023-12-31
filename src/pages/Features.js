import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import PetsIcon from '@mui/icons-material/Pets';

const FeatureCard = ({ title, description, link }) => {
  return (
    <Card className="mb-4 text-center">
      <Card.Body>
        <Card.Title className="mt-3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to={link} className="btn btn-dark">
          Learn More
        </Link>
      </Card.Body>
    </Card>
  );
};

const FeaturesPage = () => {
  const features = [

    {
      title: "Nutrition Checker ",
      icon:<PetsIcon/>,
      description:
        "Check food's nutrition your pet is intaking",
        link: "/pages/nutrition-checker",
    },
    {
      title: "Live location",
      description:
        "Track where is your pet",
        link: "/pages/location",
    },
    {
      title: "Vitalities",
      description:
        "Check your pet's heart rate, body temperature",
        link: "/pages/heartrate",
    },
    
  ];

  return (
    <>
      <Container className="mt-4">
        <h2 className="text-center mb-4">App Features</h2>
        <Row className="justify-content-center">
          {features.map((feature, index) => (
            <Col key={index} xs={12} md={6} lg={4}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                link={feature.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default FeaturesPage;
