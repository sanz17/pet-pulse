import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

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
      title: "Nutrition Checker",
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
      title: "Heart rate",
      description:
        "Check your pet's vitals such as heart rate.",
        link: "/pages/heartrate",
    },
    {
      title: "Meal Planner",
      description:
        "The Meal Planner of your pet !",
      link: "/pages/profile/meal-plan",
    },
    {
      title: "Kuch feature",
      description:
        "Another some feature",
      link: "/pages/profile/meal-plan",
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
