import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query {
    countries {
      subdivisions {
        name
        code
      }
      code
      name
      capital
      continent {
        name
      }
      currencies
      languages {
        name
      }
    }
  }
`;
export const GET_CONTINENTS = gql`
  query {
    continents {
      name
      code
    }
  }
`;
export const SEARCH_COUNTRIES = gql`
  query SearchCountries($searchCodes: [String!]!) {
    countries(filter: { code: { in: $searchCodes } }) {
      subdivisions {
        name
        code
      }
      code
      name
      capital
      continent {
        name
      }
      currencies
      languages {
        name
      }
    }
  }
`;
export const FILTER_COUNTRIES_CONTINENT = gql`
  query filterCountries($continentCodes: [String!]!) {
    countries(filter: { continent: { in: $continentCodes } }) {
      subdivisions {
        name
        code
      }
      code
      name
      capital
      continent {
        name
      }
      currencies
      languages {
        name
      }
    }
  }
`;
export const SEARCH_COUNTRIES_CONTINENT = gql`
  query SearchCountries($searchCodes: [String!]!, $continentCodes: [String!]!) {
    countries(
      filter: { code: { in: $searchCodes }, continent: { in: $continentCodes } }
    ) {
      subdivisions {
        name
        code
      }
      code
      name
      capital
      continent {
        name
      }
      currencies
      languages {
        name
      }
    }
  }
`;

export const getCountryInfo = async (country, onSuccess) => {
  try {
    const resImage = await fetch(
      `https://pixabay.com/api/?key=${import.meta.env.VITE_API_KEY}&q=${
        country.name
      }&image_type=photo&per_page=3`
    );
    const dataImage = await resImage.json();
    const image = dataImage.hits[0]?.webformatURL || "/not-image.webp";
    const resPoppulation = await fetch(
      `https://restcountries.com/v3.1/alpha?codes=${country.code}`
    );
    const dataPopulation = await resPoppulation.json();
    const population = dataPopulation[0].population;
    onSuccess(image, population);
  } catch (error) {
    console.log("Error", error);
  }
};
export const getContinentImage = async (continent, onSuccess) => {
  try {
    const res = await fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_API_KEY
      }&q=${continent}&image_type=photo&per_page=3`
    );
    const data = await res.json();
    onSuccess(data.hits[1].webformatURL);
  } catch (error) {
    console.log("Error", error);
  }
};
