import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import NftCard from "../nft-card/NftCard";

import { NFT__DATA } from "../../../assets/data/data";
import "./live-auction.css";

const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/Market">Explore more</Link>
              </span>
            </div>
          </Col>
          {NFT__DATA.slice(0, 4).map((item) => (
            <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
              <NftCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
