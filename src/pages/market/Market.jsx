import React from "react";
import { Col, Container, Row } from "reactstrap";

import CommonSection from "../../components/ui/common-section/CommonSection";
import NftCard from "../../components/ui/nft-card/NftCard";

import { NFT__DATA } from "../../assets/data/data";


import "./market.css";

const Market = () => {
  const handleCategory = () => {

  }

  const handleItems = () => {
    
  }

  const handleSort = () => {
    
  }
  return (
    <>
      <CommonSection title="MarketPlace" />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="market__product_filter d-flex align-item-center justify-content-between">
                <div className="filter__left  d-flex align-item-center gap-5">
                  <div className="all_category__filter">
                    <select onChange={handleCategory}> 
                      <option>All Categories</option>
                      <option value="Art">Art</option>
                      <option value="music">Music</option>
                      <option value="domain-name">Domain Name</option>
                      <option value="virtul-world">Virtul World</option>
                      <option value="trending-card">Trending Card</option>
                    </select>
                  </div>

                  <div className="all_items__filter ">
                    <select  onChange={handleItems}>
                      <option>All Items</option>
                      <option value="single-items">Single Items</option>
                      <option value="bundle">Bundle</option>
                    </select>
                  </div>
                </div>
                <div className="filter__right">
                  <select onChange={handleSort}>
                    <option>Sort By</option>
                    <option value="high">High Rate</option>
                    <option value="mid">Mid Rate</option>
                    <option value="low">Low Rate</option>
                  </select>
                </div>
              </div>
            </Col>

            {NFT__DATA.map((item) => (
              <Col lg="3" md="4" sm="6" className="mb-4" key={item.id}>
                <NftCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
