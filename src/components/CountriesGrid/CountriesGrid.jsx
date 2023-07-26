import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";

import { gql, useQuery } from "@apollo/client";
import leftArrow from "../../assets/left-arrow.svg";
import "./CountriesGrid.css";
import CountryDetail from "../CountryDetail/CountryDetail";
const GET_COUNTRIES = gql`
  query {
    countries {
      awsRegion
      currency
      emoji
      emojiU
      native
      phone
      phones
      states {
        name
      }
      subdivisions {
        emoji
        code
        name
      }

      code
      name
      capital
      continent {
        name
      }
      currencies
      emoji
      languages {
        name
      }
    }
  }
`;
const CountriesGrid = () => {
  const [cards, setCards] = useState(null);
  const [limit, setLimit] = useState(9);
  const [currentCards, setCurrentCards] = useState(null);
  const [cardOpened, setCardOpened] = useState(null);
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  useEffect(() => {
    console.log(data);
    const updateLimitBasedOnScreenSize = () => {
      const isMobile = window.innerWidth <= 479;
      const isTablet = window.innerWidth > 479 && window.innerWidth <= 1023;
      if (isMobile) {
        setLimit(3);
      } else if (isTablet) {
        setLimit(6);
      } else {
        setLimit(9);
      }
    };
    window.addEventListener("resize", updateLimitBasedOnScreenSize);
    updateLimitBasedOnScreenSize();

    return () => {
      window.removeEventListener("resize", updateLimitBasedOnScreenSize);
    };
  }, []);
  useEffect(() => {
    if (data) {
      console.log(data);
      setCards(data.countries);
    }
  }, [data]);
  useEffect(() => {
    if (!cards) return;
    console.log("entro aqui xd");
    console.log(page);
    setCurrentCards(cards.slice((page - 1) * limit, limit * page));
  }, [cards, page, limit]);

  const nextPage = () => {
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setPage((prev) => prev - 1);
  };
  const handleOpenDetail = (card, urlImage) => {
    setCardOpened({
      ...card,
      image: urlImage,
    });
  };
  const handleCloseDetail = () => {
    setCardOpened(null);
  };
  return (
    <>
      <div className="grid">
        {currentCards &&
          currentCards.map((card, index) => (
            <CountryCard
              key={index}
              card={card}
              handleOpenDetail={handleOpenDetail}
            />
          ))}
      </div>
      <div className="grid__buttons">
        {page > 1 && (
          <button className="grid__button" onClick={prevPage}>
            <img src={leftArrow} alt="" className="grid__arrow" />
          </button>
        )}
        {currentCards && currentCards.length == limit && (
          <button className="grid__button" onClick={nextPage}>
            <img
              src={leftArrow}
              alt=""
              className=" grid__arrow grid__right-arrow"
            />
          </button>
        )}
      </div>
      {cardOpened && (
        <CountryDetail card={cardOpened} handleClose={handleCloseDetail} />
      )}
    </>
  );
};

export default CountriesGrid;
