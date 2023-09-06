import React from "react";
import { Container } from "react-bootstrap";

import HomeBanner from "../components/HomeBanner";
import Footer from "../components/Footer";
import HomeContent from "../components/HomeContent";

const Home = () => {
  return (
    <>
      <Container>
        <HomeBanner />
        <HomeContent />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
