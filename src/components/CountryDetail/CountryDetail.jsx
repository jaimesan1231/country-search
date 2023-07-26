import "./CountryDetail.css";
import closeIcon from "../../assets/close.svg";
const CountryDetail = ({ card, handleClose }) => {
  const {
    code,
    name,
    continent,
    capital,
    languages,
    currencies,
    emoji,
    image,
  } = card;
  console.log(card);
  return (
    <div className="detail">
      <img
        src={closeIcon}
        alt="close icon"
        className="detail__close"
        onClick={handleClose}
      />
      <img src={image} alt="" className="detail__image" />

      <div className="detail__grid">
        <img
          src={`https://flagsapi.com/${code}/flat/64.png`}
          alt=""
          className="detail__flag"
        />
        <span className="detail__country">{name}</span>
        <span className="detail__continent">{continent.name}</span>
      </div>
      <p className="detail__info">
        Capital: <span className="detail__data">{capital}</span>
      </p>
      <p className="detail__info">
        Language:{" "}
        <span className="detail__data">
          {languages.map((language) => language.name).join(", ")}
        </span>
      </p>
      <p className="detail__info">
        Population: <span className="detail__data">{capital}</span>
      </p>
      <p className="detail__info">
        Currency: <span className="detail__data">{currencies.join(", ")}</span>
      </p>
      <p className="detail__info">
        Region <span>{emoji}</span>
      </p>
      <div>
        <span>a</span>
        <span>b</span>
        <span>c</span>
        <span>d</span>
      </div>
    </div>
  );
};

export default CountryDetail;
