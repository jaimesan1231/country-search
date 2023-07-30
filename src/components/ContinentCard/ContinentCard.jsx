import { useEffect, useState } from "react";
import "./ContinentCard.css";

const ContinentCard = ({ card, handleClick }) => {
  const [urlImage, setUrlImage] = useState("");
  const { name, code } = card;

  useEffect(() => {
    const getImage = async () => {
      try {
        const res = await fetch(
          `https://pixabay.com/api/?key=${
            import.meta.env.VITE_API_KEY
          }&q=${name}&image_type=photo&per_page=3`
        );
        const data = await res.json();
        setUrlImage(data.hits[1].webformatURL);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getImage();
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
