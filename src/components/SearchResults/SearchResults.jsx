import { useSearchParams } from "react-router-dom";
import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { SEARCH_COUNTRIES } from "../../api";
import CountryDetail from "../CountryDetail/CountryDetail";
import withCardGrid from "../../HOC/withCardGrid";
import CountryCard from "../CountryCard/CountryCard";
import Preloader from "../Preloader/Preloader";
import Grid from "../Grid/Grid";
import GridController from "../GridController/GridController";
import "./SearchResults.css";

const SearchResults = ({ limit, page, handleNextPage, handlePrevPage }) => {
  const [cardOpened, setCardOpened] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCards, setCurrentCards] = useState(null);
  const [cards, setCards] = useState(null);
  const [searchCountriesByCodes] = useLazyQuery(SEARCH_COUNTRIES);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  useEffect(() => {
    if (!cards) return;
    setCurrentCards(cards.slice((page - 1) * limit, limit * page));
  }, [page, limit, cards]);

  useEffect(() => {
    const searchCountries = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${searchTerm}`
        );
        const resultsData = await res.json();
        const codes =
          resultsData.status === 404
            ? []
            : resultsData.map((country) => country.cca2);
        const { data } = await searchCountriesByCodes({
          variables: { searchCodes: codes },
        });
        setIsLoading(false);
        setCards(data.countries);
      } catch (error) {
        setIsLoading(false);
        console.log("Error", error);
      }
    };
    searchCountries();
  }, [searchTerm]);

  const handleOpenDetail = (card) => {
    setCardOpened(card);
  };
  const handleCloseDetail = () => {
    setCardOpened(null);
  };

  return isLoading ? (
    <Preloader />
  ) : (
    <div className="search-results">
      {cards?.length > 0 ? (
        <Grid>
          {currentCards?.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              handleCardClick={handleOpenDetail}
            />
          ))}
        </Grid>
      ) : (
        <h2 className="search-results__title">
          No hay resultados para la búsqueda "{searchTerm}"
        </h2>
      )}

      <GridController
        page={page}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        totalItems={currentCards?.length || 0}
        limit={limit}
      />
      {cardOpened && (
        <CountryDetail card={cardOpened} handleClose={handleCloseDetail} />
      )}
    </div>
  );
};

export default withCardGrid(SearchResults);
