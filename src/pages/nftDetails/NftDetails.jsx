import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import CommonSection from "../../components/ui/common-section/CommonSection";
import LiveAuction from "../../components/ui/live-auction/LiveAuction";

import { NFT__DATA } from "../../assets/data/data";
import "./nftDetails.css";

const NftDetails = () => {
  const { id } = useParams();
  const singleNft = NFT__DATA.find((item) => item.id === id);
  return (
    <>
      <CommonSection title={singleNft.title} />

      <section>
        <Container>
          <Row>
            <Col lg={"6"} md="6">
              <img src={singleNft.imgUrl} alt={singleNft.title} className="w-100 single__nft-img"  />
            </Col>
            <Col lg="6" md="6">
              <div className="single__nft__contnet">
                <h2>{singleNft.title}</h2>

                <div className="d-flex aligin-item-center justify-content-between">
                  <div className="d-flex aligin-item-center gap-4">
                    <span><i class="ri-eye-line"></i> 234</span>
                    <span><i class="ri-heart-line"></i> 123</span>
                  </div>

                  <div className="d-flex aligin-item-center gap-4">
                    <span><i class="ri-send-plane-line"></i></span>
                    <span><i class="ri-more-2-line"></i></span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default NftDetails;
