import React from 'react';
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

export default AppWrapper;
