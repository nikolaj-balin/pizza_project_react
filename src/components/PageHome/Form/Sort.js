import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSortAction} from '../../../actions/Actions.js';


const Sort = () => {

		const dispatch = useDispatch();
		const state_ = useSelector(state => {return {...state}});
		const sort = state_.sort;
		const dispatch_starting = useCallback((e) => {
			dispatch(createSortAction(e.target)) 
		}, []);
	
		return (
			<div className='sort'>
				<span className='filter_button'>Сортировать</span>
				<div className='filter_body'>
					<label title="Сортировка"><input type="checkbox" name='sort' value='none' onChange={dispatch_starting} checked={sort == 'none'} />По умолчанию</label>
					<label title="Сортировка"><input type="checkbox" name='name' value='ASC_NAME' onChange={dispatch_starting} checked={sort == 'ASC_NAME'} />По имени</label>
					<label title="Сортировка"><input type="checkbox" name='name' value='DESC_NAME' onChange={dispatch_starting} checked={sort == 'DESC_NAME'} />По имени</label>
					<label title="Сортировка"><input type="checkbox" name='birthday' value='ASC_BIRTHDAY' onChange={dispatch_starting} checked={sort == 'ASC_BIRTHDAY'} />По дате</label>
					<label title="Сортировка"><input type="checkbox" name='birthday' value='DESC_BIRTHDAY' onChange={dispatch_starting} checked={sort == 'DESC_BIRTHDAY'} />По дате</label>
				</div>				
			</div>
		)
};

export {Sort};