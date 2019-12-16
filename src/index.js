import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import { HashRouter, Route } from 'react-router-dom';
import './scss/style.scss';
import storeCreate from './store/store.js';
import {PageHome} from './components/PageHome/PageHome.js';
import {PageFormEditWorkers} from './components/PageFormEditWorkers/PageFormEditWorkers.js';


const App = () => (
		<HashRouter>
	    	<Provider store={storeCreate}>
					<Route exact path="/" component={PageHome} />
					<Route path="/edit/:id" component={PageFormEditWorkers} />
			</Provider>
		</HashRouter>
);


ReactDOM.render(
    <App />,
    document.getElementById('root')
);