import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {translatorRU_role} from '../../../translators/translatorRU.js';
import { createFilterAction, clearFilterAction} from '../../../actions/Actions.js';


const getSelectObj = (store) => {

	const objListUnique = {};

	[...store].forEach( function(element, index) {
		objListUnique[element.role] = element;
	})

	const arrListUnique = Object.keys(objListUnique).map( (n,i) => {
		if(translatorRU_role[n]) {
			return {id: n, label: n, text: translatorRU_role[n]};
		} else {
			return {id: n, label: n, text: "..."};
		};
	});

	return arrListUnique.sort((a, b) => a.text - b.text);

};

const Junior = () => {

		const dispatch = useDispatch();
		const dispatch_starting = useCallback((e) => {dispatch(createFilterAction(e.target))}, []);
		const dispatch_clear = useCallback((e) => {dispatch(clearFilterAction(e.target))}, []);
		const state_ = useSelector(state => {return {...state}});
		const data = state_.data;
		const search_state = state_.search;
		let listWorkersUniqueProps = getSelectObj(data);
	
		return (
			<div className='junior'>
				<span className='filter_button'>Фильтр должности</span>
				<div className='filter_body'>
					{listWorkersUniqueProps.map((n,i) =>(<label key={n.id} title="Поиск"><input type="checkbox" name='role' value={n.label} onChange={dispatch_starting} checked={search_state.role.includes(n.label)} />{n.text}</label>))}
					<div data-name='role' onClick={dispatch_clear}>Сбросить фильтр</div>
				</div>				
			</div>
		)
};

export {Junior};