import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {translatorRU_role} from '../../../translators/translatorRU.js';
import { createFilterAction, clearFilterAction, clearPanelStateAction} from '../../../actions/Actions.js';


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
		const dispatch_state_panel = useCallback((e) => {dispatch(clearPanelStateAction(e.currentTarget))}, []);
		const state_ = useSelector(state => {return {...state}});
		const data = state_.data;
		const search_state = state_.search;
		const state_panel = state_.state_panel;
		let listWorkersUniqueProps = getSelectObj(data);
	
		return (
			<div className={'junior' + (state_panel.role == 1 ? ' open' : '') + (search_state.role.length != 0 ? ' select' : '')}
				 data-name={'role'}
				 data-value={state_panel.role}
				 onClick={(e) => {
					 e.stopPropagation();
					 if(e.target.tagName != 'LABEL' ) {
						 dispatch_state_panel(e)
					 }
				 }}
			>
				<span className='filter_button'>Фильтр должности</span>
				<div className={'filter_body' + (state_panel.role == 1 ? ' open' : '')}>
					{listWorkersUniqueProps.map((n,i) =>(
						<div key={n.id} className={'junior_body'}>
							<input type="checkbox"
								   name='role'
								   id={'role' + n.id}
								   value={n.label}
								   onChange={dispatch_starting}
								   className={search_state.role.includes(n.label) ? 'checked' : ''}
								   checked={search_state.role.includes(n.label)}
							/>
							<label title="Поиск"
								   htmlFor={'role' + n.id}
							>{n.text}
							</label>
						</div>

					))}
					<div data-name='role'
						 onClick={dispatch_clear}
						 className={'clear_filter'}
					>Сбросить фильтр</div>
				</div>				
			</div>
		)
};

export {Junior};