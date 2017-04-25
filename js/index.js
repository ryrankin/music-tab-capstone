require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRoute, Redirect} from 'react-router';
import {Provider} from 'react-redux';

import store from './store';
import Form from '/components/form';

document.addEventListener('DOMContentLoaded', () => {
	ReactDOM.render(
		<Provider store={store}>
			<Form />
		</Provider>,
		document.getElementById('app')
		);
});
