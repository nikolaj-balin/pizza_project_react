import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSearchAction} from '../../../actions/Actions.js';


const InputSearch = () => {

	const dispatch = useDispatch();
	const dispatch_starting = useCallback((e) => {dispatch(createSearchAction(e.target.value))}, []);
	const search_state = useSelector(state => {return { ...state.search }});

	return (
		<label className='user_search_form'><input placeholder="Поиск по имени" name="searchname" type="search" onChange={dispatch_starting} value={search_state.name} autoComplete="off" /></label>
)};

export {InputSearch};
