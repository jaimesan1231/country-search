import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { GET_CONTINENTS } from "../../api";
import ContinentCard from "../ContinentCard/ContinentCard";
import CardSkeleton from "../CardSkeleton/CardSkeleton";
import withCardGrid from "../../HOC/withCardGrid";
import GridController from "../GridController/GridController";
import Grid from "../Grid/Grid";
import "./Continents.css";
const Continents = ({ limit, page, handleNextPage, handlePrevPage }) => {
  const [currentCards, setCurrentCards] = useState(null);
  const { data } = useQuery(GET_CONTINENTS);
  const navigate = useNavigate();
  useEffect(() => {
    if (!data) return;
    setCurrentCards(data.continents.slice((page - 1) * limit, limit * page));
  }, [page, limit, data]);
  const handleCardClick = (continentCode) => {
    navigate(`/continents/${continentCode}`);
  };
  return (
    <div className="continents">
      <Grid>
        {currentCards ? (
          currentCards.map((continent, index) => (
            <ContinentCard
              key={index}
              card={continent}
              handleClick={handleCardClick}
            />
          ))
        ) : (
          <CardSkeleton cards={7} />
        )}
      </Grid>
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

export default withCardGrid(Continents);
