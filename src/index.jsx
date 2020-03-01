import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from 'components';
import { debug, nodeEnv } from 'config';
import store from 'store';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('app'),
);

serviceWorker.unregister();
