import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/home/Home";
import Market from "../pages/market/Market";
import Contact from "../pages/contact/Contact";
import Create from "../pages/create/Create";
import SellerProfile from "../pages/sellerProfile/SellerProfile";
import EditProfile from "../pages/editProfile/EditProfile";
import Wallet from "../pages/wallet/Wallet";
import NftDetails from "../pages/nftDetails/NftDetails";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/market" element={<Market />} />
      <Route path="/create" element={<Create />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/seller-profile" element={<SellerProfile />} />
      <Route path="/wallet" element={<Wallet />} />
      <Route path="/market/:id" element={<NftDetails />} />
    </Routes>
  );
};

export default Routers;
