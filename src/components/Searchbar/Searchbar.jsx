import "./Searchbar.css";
import { useState } from "react";
import searchIcon from "../../assets/search.svg";
import closeIcon from "../../assets/close.svg";

// const SEARCH_COUNTRIES = gql`
//   query SearchCountries($searchText: String!) {
//     countries(filter: { code: { eq: $searchText } }) {
//       code
//       name
//       capital
//       continent {
//         name
//       }
//       currencies
//       emoji
//       languages {
//         name
//       }
//     }
//   }
// `;

const Searchbar = () => {
  const [searchText, setSearchText] = useState("");
  // const [searchCountries, { loading, error, data }] =
  //   useLazyQuery(SEARCH_COUNTRIES);
  // const handleSearch = () => {
  //   searchCountries({ variables: { searchText } });
  // };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={`searchbar ${isOpen && "searchbar_expanded"}`}>
        <h2 className="searchbar__title">Pais</h2>
        <button className="searchbar__button">
          <img src={searchIcon} alt="" />
          <span className="searchbar__button-text">Buscar</span>
        </button>
        <input
          className="searchbar__input"
          type="text"
          placeholder="Escribe el país que deseas ver"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {/* {loading && <p>Cargando...</p>}
      {error && <p>Error al realizar la búsqueda</p>}
      {data &&
        data.countries.map((country) => (
          <div key={country.code}>
            <span>{country.name}</span>
          </div>
        ))} */}
        <button
          className="searchbar__button searchbar__close"
          onClick={() => setIsOpen(false)}
        >
          <img src={closeIcon} alt="" />
        </button>
      </div>
      <button
        className="searchbar__button_left searchbar__button"
        onClick={() => setIsOpen(true)}
      >
        <img src={searchIcon} alt="" />
      </button>
    </>
  );
};

export default Searchbar;
