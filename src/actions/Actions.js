import C from './constants.js';


const createSearchAction = (string) => {
		return {
			type: C.SEARCH_WORKER,
			value: string
		}
};

const createFilterAction = (target) => {
		return {
			type: C.FILTER,
			name: target.name,
			value: target.value,
		}
};

const edit_worker = ( dataArr ) => {

	return {
		type: C.EDIT_WORKER,
		...dataArr
	}
  
};

const createSortAction = (el) => {

	return {
		type: C.SORT_WORKER,
		value: el.value
	}
  
};

const add_worker = ( dataArr ) => {

	return {
		type: C.ADD_WORKER,
		...dataArr
	}
  
};

const clearFilterAction = (target) => {
	return {
			type: C.CLEAR_FILTER,
			name: target.dataset.name,
			el: target
		}
};

const clearPanelStateAction = (target) => {
	return {
			type: C.STATE_PANEL,
			name: target.dataset.name,
			value: target.dataset.value,
		}
};

const createClearPanelStateAction = (target) => {
	return {
			type: C.STATE_PANEL_CLEAR,
			e: target,
		}
};

export {createSearchAction, edit_worker, add_worker, createFilterAction, createSortAction, clearFilterAction, clearPanelStateAction, createClearPanelStateAction};