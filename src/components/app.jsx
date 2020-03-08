/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { defaultTheme, GlobalStyle } from 'theme';
import {
  AppWrapper,
  FormDialog,
  ResponsiveDatePicker,
  ResponsiveLeftSidePanel,
} from 'components';

class App extends React.Component {
  static propTypes = {/* ... */};
  state = {/* ... */};

  handler1 = () => {/* ... */}
  handler2 = () => {/* ... */}
  handler3 = () => {/* ... */}

  render() {
    return (
      <>
        <AppWrapper>
          {/*
            Some combination of:
              FormDialog,
              ResponsiveDatePicker,
              ResponsiveLeftSidePanel
          */}
        </AppWrapper>
      </>
    );
  }
}

const mapStateToProps = state => ({
  entries: state.entries.entries,
});

export default connect(mapStateToProps, { fetchEntries })(App);
