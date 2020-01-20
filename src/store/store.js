import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduser_prop from '../redusers/reduser_prop.js';
import data_json from './data.json';

const data = () => {
    return {
    				data: [...data_json],
    				search: {
    					name: "",
    					isArchive: [],
    					role: []
    				},
    				sort: 'none',
					state_panel: {
						isArchive: 0,
						role: 0,
						sort: 0,
					}
    			};
};


const logger = store => next => action => {

    let result = null;

    console.groupCollapsed("dispatching", action.type)
    console.log('action', action)
    result = next(action)
    console.log('next state', store.getState())
    console.groupEnd()

};


const storeFactory = (data) => applyMiddleware(logger)(createStore)(reduser_prop, data);


export default storeFactory(data());