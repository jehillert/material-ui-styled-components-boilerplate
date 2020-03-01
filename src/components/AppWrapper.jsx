import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import MomentUtils from '@date-io/moment';
import PropTypes from 'prop-types';
import { defaultTheme, GlobalStyle } from 'theme';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { serverConsoleUrl } from 'config';
import { StylesProvider } from '@material-ui/styles';
import { ThemeProvider } from 'styled-components';
import { isDesktop } from 'utilities';
import serverConsole from './AppConsole';

class AppWrapper extends React.Component {
  componentDidMount() {
    if (isDesktop && serverConsole.isEnabled) {
      serverConsole.create(
        serverConsoleUrl,
        'TimeLockrServerDemoPopupWindow',
        800,
        400,
      );
    }
  }

  render() {
    const { children } = this.props;

    return (
      <>
        <CssBaseline />
        <ThemeProvider theme={defaultTheme}>
          <StylesProvider injectFirst>
            <GlobalStyle />
            <MuiPickersUtilsProvider utils={MomentUtils}>
              {children}
            </MuiPickersUtilsProvider>
          </StylesProvider>
        </ThemeProvider>
      </>
    );
  }
}

AppWrapper.defaultProps = {
  children: null,
};

AppWrapper.propTypes = {
  children: PropTypes.node,
};

export default AppWrapper;
