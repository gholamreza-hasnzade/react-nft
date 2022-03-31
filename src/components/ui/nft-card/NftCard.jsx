import React from "react";
import { Link } from "react-router-dom";


const NftCard = (props) => {
  const {  id, title, currentBid, creatorImg, imgUrl, creator } = props.item;

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt={title} className="w-100"/>
      </div>
      <div className="nft__content">
        <h5 className="nft__title"><Link to={`/market/${id}`}>{title}</Link></h5>

        <div className="creator__info-wrapper  d-flex  gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="" className="w-100" />
          </div>
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div >
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>
            <div className="d-flex flex-column align-items-end">
              <h6>Current BId</h6>
              <p>{currentBid} ETH</p>
            </div> 
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button className="bid__btn d-flex align-items-center gap-1">
            <i className="ri-shopping-bag-line"></i>Place Bid
          </button>
          <span className="history__link">
            <Link to="#">View history</Link>
          </span>
        </div> 
      </div>
    </div>
  );
};

export default NftCard;
