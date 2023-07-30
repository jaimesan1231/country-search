import { useEffect, useState } from "react";
import { getCountryInfo } from "../../api";
import "./CountryCard.css";

const CountryCard = ({ country, handleCardClick }) => {
  const [card, setCard] = useState(null);

  useEffect(() => {
    const handleGetData = async () => {
      await getCountryInfo(country, (image, population) => {
        setCard({
          ...country,
          image,
          population,
        });
      });
    };
    handleGetData();
  }, [country]);
  return (
    card && (
      <div className="card" onClick={() => handleCardClick(card)}>
        <img
          src={card.image}
          alt={`${card.name} image`}
          className="card__image"
        />
        <div className="card__info">
          <img
            src={`/flags/${card.code.toLowerCase()}.webp`}
            alt={`${card.name} flag`}
            className="card__flag"
          />
          <span className="card__country">{card.name}</span>
          <span className="card__continent">{card.continent.name}</span>
        </div>
      </div>
    )
  );
};

export default CountryCard;
