import React from "react";
import "../../public/assets/css/custom.css"; // CSS dosyasını import edin
import { useRouter } from "next/navigation";

const BusinessCard = ({ b }) => {
  const router = useRouter();
  const handleClick = (e) => {
    router.push(`/my-businesses/${b.Name}`);
  };
  return (
    <div
      className="business-card bg-dark text-white rounded"
      onClick={(e) => handleClick(e)}
    >
      <img
        src="https://cdn.pixabay.com/photo/2021/10/11/23/49/building-6702046_1280.png"
        className="business-card-img"
        alt="Business"
      />
      <div className="business-card-img-overlay">
        <h5 className="card-title text-white">{b.Name}</h5>
      </div>
    </div>
  );
};

export default BusinessCard;
