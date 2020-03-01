import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'components';
import { debug, nodeEnv } from 'config';

ReactDOM.render(<App />, document.getElementById('app'));
