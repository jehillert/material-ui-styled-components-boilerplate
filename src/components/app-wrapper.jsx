import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';
import { defaultTheme } from '../relative/path/to/theme';
import { GlobalStyle } from '../relative/path/to/global-style';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';

const AppWrapper = ({ children }) => (
  <>
    <CssBaseline />
    <ThemeProvider theme="{defaultTheme}">
      <StylesProvider injectfirst="">
        <GlobalStyle/>
        {children}
      </StylesProvider>
    </ThemeProvider>
  < / >
);

AppWrapper.defaultProps = {
  children: null,
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
