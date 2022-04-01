import React from "react";
import HeroSection from "../../components/ui/HeroSection";
import LiveAuction from "../../components/ui/live-auction/LiveAuction";
import SellerSection from "../../components/ui/seller-section/SellerSection";

const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      <SellerSection />
    </>
  );
};

export default Home;
