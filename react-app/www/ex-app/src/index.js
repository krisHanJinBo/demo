import React from 'react';
import ReactDOM from 'react-dom';
import RouterConfig from './RouterConfig';

import {createStore} from 'redux';
import { Provider} from 'react-redux';
import reducer from './store/reducer';
import defaultState from './store/state';

const store = createStore(reducer,defaultState);


ReactDOM.render(
  <Provider store={store}>
    <RouterConfig/>
  </Provider>,document.querySelector('#app'));