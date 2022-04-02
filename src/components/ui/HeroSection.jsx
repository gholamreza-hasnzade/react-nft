import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import heroImg from "../../assets/images/hero.jpg";

import "./hero-section.css";
const HeroSection = () => {
  return (
    <section className="Hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect
                <span> sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
                odio voluptatum est nihil, at in dolorem vero ad quas reiciendis
                mollitia iusto! Officia explicabo quod labore reiciendis
                possimus numquam! Commodi!
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line"></i>
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line"></i>
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col> 

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
