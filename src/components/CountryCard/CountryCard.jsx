import { useEffect, useState } from "react";
import "./CountryCard.css";
import CountryDetail from "../CountryDetail/CountryDetail";

const CountryCard = ({ card, handleOpenDetail }) => {
  console.log(card);
  const { name, continent, code } = card;
  const [urlImage, setUrlImage] = useState("");

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch(
        `https://pixabay.com/api/?key=38470145-32c13a1632e8f07dc52b5234f&q=${name}&image_type=photo&per_page=3`
      );
      const data = await res.json();
      console.log(data);
      setUrlImage(data.hits[0].webformatURL);
    };
    getImage();
  }, [card]);
  return (
    <>
      <div className="card" onClick={() => handleOpenDetail(card, urlImage)}>
        <img src={urlImage} alt="" className="card__image" />

        <div className="card__info">
          <img
            src={`https://flagsapi.com/${code}/flat/64.png`}
            alt=""
            className="card__flag"
          />
          <span className="card__country">{name}</span>
          <span className="card__continent">{continent.name}</span>
        </div>
      </div>
    </>
  );
};

export default CountryCard;
