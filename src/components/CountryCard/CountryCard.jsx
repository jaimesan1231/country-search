import { useEffect, useState } from "react";
import "./CountryCard.css";

const CountryCard = ({ country, handleCardClick }) => {
  const [card, setCard] = useState(null);
  useEffect(() => {
    const getCardData = async () => {
      try {
        const resImage = await fetch(
          `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${
            country.name
          }&image_type=photo&per_page=3`
        );
        const dataImage = await resImage.json();
        const image =
          dataImage.hits[0]?.webformatURL || "/src/assets/not-image.webp";
        const resPoppulation = await fetch(
          `https://restcountries.com/v3.1/alpha?codes=${country.code}`
        );
        const dataPopulation = await resPoppulation.json();
        const population = dataPopulation[0].population;
        setCard({
          ...country,
          image,
          population,
        });
      } catch (error) {
        console.log("Error", error);
      }
    };
    getCardData();
    return () => {
      setCard(null);
    };
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
            src={`/assets/flags/${card.code.toLowerCase()}.webp`}
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
