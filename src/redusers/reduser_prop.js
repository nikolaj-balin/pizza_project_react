import C from '../actions/constants.js';

const clearFilter = (store, action) => {
	let _store = {...store};
	_store.search[action.el.dataset.name] = [];
	return _store;
};

const searchUserStore = (store, action) => {
	
	return {...store, search: { ...store.search,  name: action.value }};

};

const filterArchiveStore = (store, action) => {

		let _store = {...store};
		let arr = [..._store.search[action.name]];

		if(arr.includes(action.value)){
			arr = arr.filter((value) => {return value !== action.value});			
		} else {
			arr.push(action.value);
		}

		_store.search[action.name] = arr;
		
		return _store;

};

const editWorkersEditStore = (store, action) => {

	const store_ = {...store};

	store_.data.forEach((n, i) => {
	if(n.id == action.id) {
		n.name = action.name;
		n.phone = action.phone;
		n.birthday = action.birthday;
		n.role = action.role;
		n.isArchive = action.isArchive;
	}});
	
		return {...store_, search: { name: "",	isArchive: [],	role: [] }, sort: 'none'};
	
};

const addWorkersEditStore = (store, action) => {
	
	const store_ = {...store};
   store_.data.sort((a, b) => a.id - b.id);

	const obj_new = { id: store_.data[store_.data.length - 1].id + 1,
							name: action.name,
							isArchive: action.isArchive,
							role: action.role,
							phone: action.phone,
							birthday: action.birthday

	};

	let store__ = {...store, data: [...store_.data, obj_new], search: { name: "",	isArchive: [],	role: [] }, sort: 'none'};

		return store__;
	
};

const filterStore = (store, action) => {

	let store_ = {...store};

	store_.sort = action.value;

	return store_;
};

const reduser_props = (store=[], action) => { 
		
	switch (action.type) {
		case C.EDIT_WORKER:
				return editWorkersEditStore(store, action);
			break;
		case C.ADD_WORKER:
				return addWorkersEditStore(store, action);
			break;
		case C.SEARCH_WORKER:
				return searchUserStore(store, action);
			break;

		case C.FILTER:
				return filterArchiveStore(store, action);
			break;

		case C.SORT_WORKER:
				return filterStore(store, action);
			break;

		case C.CLEAR_FILTER:
				return clearFilter(store, action);
			break;

		default:
				return store;
			break;
	}

};

export default reduser_props;