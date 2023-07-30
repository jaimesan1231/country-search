import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FILTER_COUNTRIES_CONTINENT } from "../../api";
import { useLazyQuery } from "@apollo/client";
import CountryDetail from "../CountryDetail/CountryDetail";
import withCardGrid from "../../HOC/withCardGrid";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import CountryCard from "../CountryCard/CountryCard";
import GridController from "../GridController/GridController";
import Grid from "../Grid/Grid";
import "./ContinentFilter.css";
const ContinentFilter = ({ limit, page, handleNextPage, handlePrevPage }) => {
  const [cardOpened, setCardOpened] = useState(null);
  const { continent } = useParams();
  const [currentCards, setCurrentCards] = useState(null);
  const [filterCountries, { data }] = useLazyQuery(FILTER_COUNTRIES_CONTINENT);
  useEffect(() => {
    filterCountries({ variables: { continentCodes: [continent] } });
  }, [continent]);
  useEffect(() => {
    if (!data) return;
    setCurrentCards(data.countries.slice((page - 1) * limit, limit * page));
  }, [page, limit, data]);
  const handleOpenDetail = (card) => {
    setCardOpened(card);
  };
  const handleCloseDetail = () => {
    setCardOpened(null);
  };

  return (
    <div className="continent-filter">
      <Grid>
        {currentCards ? (
          currentCards.map((country, index) => (
            <CountryCard
              key={index}
              country={country}
              handleCardClick={handleOpenDetail}
            />
          ))
        ) : (
          <CardSkeleton cards={limit} />
        )}
      </Grid>
      {cardOpened && (
        <CountryDetail card={cardOpened} handleClose={handleCloseDetail} />
      )}
      <GridController
        page={page}
        onPrevPage={handlePrevPage}
        onNextPage={handleNextPage}
        totalItems={currentCards?.length || 0}
        limit={limit}
      />
    </div>
  );
};

export default withCardGrid(ContinentFilter);
