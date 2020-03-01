## PLEASE NOTE
  This boilerplate is a work in progress.  I am taking an old project and chopping it down to get the bare minimum required to get a [MUI+Styled Components] project off the ground. It probably does not build yet, and if it does,the package file probably has stuff you do not need to add to your project.  In the meantime, the information below should still be helpful.

## ABOUT THIS REPO

The boilerplate contained in this repo is intended to provide the code and dependencies necessary to build a ReactJS app from Material UI components while leaving customization and theming to the popular Styled Components CSS-in-JSS styling library. The developer should be able to immediately start styling imported MUI compoents using the Styled Component API with minimal conflicts.

For those who already have Styled Components working in their Material UI project but are having troubles overriding MUI's default styles, I have pasted the code you are most likely looking for below.   ,

Supporting documentation can be found on the Material UI website <a href="https://material-ui.com/guides/interoperability/#styled-components">here</a>, <a href="https://material-ui.com/guides/interoperability/#controlling-priority-%EF%B8%8F-3">here</a> and <a href="https://material-ui.com/styles/advanced/#injectfirst">here</a>.<code>

Please note, I am unaffiliated with the official Material UI and Styled Components projects.  Just providing this boilerplate as a courtesy.

```import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { defaultTheme } from './default-theme';
import { GlobalStyle } from './global-style';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

const AppWrapper = ({ children }) => (
  <>
    <cssbaseline/>
    <themeprovider theme="{defaultTheme}">
      <stylesprovider injectfirst="">
        <globalstyle/>
        {children}
      </stylesprovider>
    </themeprovider>
  < / >
);

AppWrapper.defaultProps = {
  children: null,
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;```

------------------------------------

// GlobalStyle and defaultTheme are defined
// in other files. For example:

// global-style.jsx
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`...`;
export default GlobalStyle;

// theme.js
const defaultTheme = { ... };
export default defaultTheme;
