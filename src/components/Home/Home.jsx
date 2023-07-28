import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../../api";
import CountryDetail from "../CountryDetail/CountryDetail";
import CountryCard from "../CountryCard/CountryCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import withCardGrid from "../../HOC/withCardGrid";
import GridController from "../GridController/GridController";
import Grid from "../Grid/Grid";
import "./Home.css";
const Home = ({ limit, page, handleNextPage, handlePrevPage }) => {
  const [cardOpened, setCardOpened] = useState(null);
  const { data } = useQuery(GET_COUNTRIES);
  const [currentCards, setCurrentCards] = useState(null);
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
    <div className="home">
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

export default withCardGrid(Home);
