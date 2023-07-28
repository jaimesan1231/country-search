import closeIcon from "../../assets/close.svg";
import "./CountryDetail.css";

const CountryDetail = ({ card, handleClose }) => {
  const {
    code,
    name,
    continent,
    capital,
    languages,
    currencies,
    image,
    subdivisions,
    population,
  } = card;
  return (
    <div className="detail">
      <img
        src={closeIcon}
        alt="close icon"
        className="detail__close"
        onClick={handleClose}
      />
      <img src={image} alt={`${name} image`} className="detail__image" />

      <div className="detail__grid">
        <img
          src={`/src/assets/flags/${code.toLowerCase()}.webp`}
          alt={`${name} flag`}
          className="detail__flag"
        />
        <span className="detail__country">{name}</span>
        <span className="detail__continent">{continent.name}</span>
      </div>

      <p className="detail__info">
        Capital:{" "}
        <span className="detail__data">{capital || "Not Available"}</span>
      </p>

      <p className="detail__info">
        Language:{" "}
        <span className="detail__data">
          {languages.map((language) => language.name).join(", ") ||
            "Not Available"}
        </span>
      </p>
      <p className="detail__info">
        Population: <span className="detail__data">{population}</span>
      </p>
      <p className="detail__info">
        Currency:{" "}
        <span className="detail__data">
          {currencies.join(", ") || "Not Available"}
        </span>
      </p>

      {subdivisions?.length > 0 && (
        <>
          <p className="detail__info">Region</p>

          <ul className="detail__list">
            {subdivisions.map((item) => (
              <li key={item.code} className="detail__list-item">
                {item.name}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CountryDetail;
