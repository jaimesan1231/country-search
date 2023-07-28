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
export const FILTER_COUNTRIES = gql`
  query filterCountries($continentCode: String!) {
    countries(filter: { continent: { eq: $continentCode } }) {
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
