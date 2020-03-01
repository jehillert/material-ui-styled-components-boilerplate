import * as React from 'react';
import { AppWrapper } from 'components';
import { addUser, ErrorBoundary, verifyUser } from 'utilities';
import { defaultTheme, GlobalStyle } from 'theme';
import './config';

class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <AppWrapper>
        </AppWrapper>
      </>
    );
  }
}

export default App;
