import "./GridController.css";
import leftArrow from "../../assets/left-arrow.svg";

const GridController = ({
  page,
  onPrevPage,
  onNextPage,
  totalItems,
  limit,
}) => {
  return (
    <div className="grid__buttons">
      {page > 1 && (
        <button className="grid__button" onClick={onPrevPage}>
          <img src={leftArrow} alt="prev page button" className="grid__arrow" />
        </button>
      )}
      {totalItems == limit && (
        <button className="grid__button" onClick={onNextPage}>
          <img
            src={leftArrow}
            alt="next page button"
            className=" grid__arrow grid__right-arrow"
          />
        </button>
      )}
    </div>
  );
};

export default GridController;
