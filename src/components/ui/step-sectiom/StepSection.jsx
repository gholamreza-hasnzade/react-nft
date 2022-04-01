import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./step-section.css";

const STEP_DATA = [
  {
    id: 1,
    title: "Setup your wallet",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora
    quod quia commodi impedit`,
    icon: "ri-wallet-line",
  },
  {
    id: 2,
    title: "Create your collection",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora
    quod quia commodi impedit`,
    icon: "ri-layout-masonry-line",
  },
  {
    id: 3,
    title: "Add your NFTs",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora
    quod quia commodi impedit`,
    icon: "ri-image-line",
  },
  {
    id: 4,
    title: "List them for sale",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora
    quod quia commodi impedit`,
    icon: "ri-list-check",
  },
];
const StepSection = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h3 className="step__title">Create and sell your NFTs</h3>
          </Col>

          {STEP_DATA.map((item) => (
            <Col lg="3" md="4" sm="6" key={item.id}>
              <div className="single__step__item">
                <span>
                  <i className={item.icon}></i>
                </span>
                <div className="step__item__contnet">
                  <h5>
                    <Link to="/wallet">{item.title}</Link>
                  </h5>
                  <p className="mb-0">{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default StepSection;
