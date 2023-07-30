import { useEffect, useState } from "react";
import "./ContinentCard.css";
import { getContinentImage } from "../../api";

const ContinentCard = ({ card, handleClick }) => {
  const [urlImage, setUrlImage] = useState("");
  const { name, code } = card;

  useEffect(() => {
    const handleGetImage = async () => {
      await getContinentImage(name, (image) => {
        setUrlImage(image);
      });
    };
    handleGetImage();
  }, [card]);
  return (
    <div className="continent-card" onClick={() => handleClick(code)}>
      <img
        src={urlImage}
        alt={`${name} image`}
        className="continent-card__image"
      />
      <div className="continent-card__info">
        <span className="continent-card__name">{name}</span>
        <span className="continent-card__code">{code}</span>
      </div>
    </div>
  );
};

export default ContinentCard;
