import 'whatwg-fetch';

// Import global stuff
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Bootstrap web app
import React from 'react'; // eslint-disable-line no-unused-vars
import ReactDom from 'react-dom';

import Router from './Router';

export let component = ReactDom.render(Router, document.getElementById('app'));
