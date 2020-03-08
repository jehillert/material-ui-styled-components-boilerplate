import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  tagname {
      property: value
  }

  tagname:selector {
    property: value;
    property: value;
    property: value;
  }

  button:hover {
    property: value;
    property: value;
    property: value;
  }

  * {
    property: value;
    property: value;
    property: value;
  }

  #primary-container {
    // SIDEBARS
    display: grid;
    grid-column-gap: __;
    width: ____;
    height: ____;

    @media (min-width: ${props => props.theme.bp[4]}) {
      grid-template-areas:
        "leftSide appBarArea rightSide"
        "leftSide cardArea rightSide";
      grid-template-columns: __ __ __;
      grid-template-rows: __ __;
    }

    // NO SIDEBARS
    @media (max-width: ${props => props.theme.bp[4]}) {
      grid-template-areas:
        "appBarArea"
        "cardArea";
      grid-template-columns: __;
      grid-template-rows: __ __;
    }
  }
`;

export default GlobalStyle;
