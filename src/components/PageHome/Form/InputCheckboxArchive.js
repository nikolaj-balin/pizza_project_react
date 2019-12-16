import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createFilterAction, clearFilterAction} from '../../../actions/Actions.js';


const InputCheckboxArchive = () => {

	const dispatch = useDispatch();
	const dispatch_starting = useCallback((e) => {dispatch(createFilterAction(e.target))}, []);
	const dispatch_clear = useCallback((e) => {dispatch(clearFilterAction(e.target))}, []);
	const search_state = useSelector(state => {return { ...state.search }});

	return (<div className='isArchive'>
				<span className='filter_button'>фильтр статуса</span>
				<div className='filter_body'>
					<label title="Поиск"><input type="checkbox" name='isArchive' value='archive' onChange={dispatch_starting} checked={search_state.isArchive.includes('archive')} />В архиве</label>
					<label title="Поиск"><input type="checkbox" name='isArchive' value='no_archive' onChange={dispatch_starting} checked={search_state.isArchive.includes('no_archive')} />НЕТ</label>
					<div data-name='isArchive' onClick={dispatch_clear}>Сбросить фильтр</div>
				</div>				
			</div>)
};

export {InputCheckboxArchive};