import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { createFilterAction, clearFilterAction, clearPanelStateAction} from '../../../actions/Actions.js';


const InputCheckboxArchive = () => {

	const dispatch = useDispatch();
	const dispatch_starting = useCallback((e) => {dispatch(createFilterAction(e.target))}, []);
	const dispatch_clear = useCallback((e) => {dispatch(clearFilterAction(e.target))}, []);
	const dispatch_state_panel = useCallback((e) => {dispatch(clearPanelStateAction(e.currentTarget))}, []);
	const _store = useSelector(state => {return { ...state }});
	const state_panel = _store.state_panel;
	const search_state = _store.search;

	return (<div className={'isArchive'  + (state_panel.isArchive == 1 ? ' open' : '') + (search_state.isArchive.length != 0 ? ' select' : '')}
				 data-name={'isArchive'}
				 data-value={state_panel.isArchive}
				 onClick={(e) => {
					 e.stopPropagation();
				 	if(e.target.tagName != 'LABEL' ) {
						dispatch_state_panel(e)
					}
				 }}
				>
				<span className={'filter_button'}>фильтр статуса</span>
				<div className={'filter_body' + (state_panel.isArchive == 1 ? ' open' : '')}>
					<input type="checkbox"
						   name='isArchive'
						   value='archive'
						   id={'filterarchive'}
						   className={search_state.isArchive.includes('archive') ? 'checked' : ''}
						   onChange={dispatch_starting} checked={search_state.isArchive.includes('archive')}
					/>
					<label title="Поиск"
						   htmlFor={'filterarchive'}
					>В архиве</label>
					<input type="checkbox"
						   name='isArchive'
						   id={'filterarchiveno'}
						   value='no_archive'
						   className={search_state.isArchive.includes('no_archive') ? 'checked' : ''}
						   onChange={dispatch_starting}
						   checked={search_state.isArchive.includes('no_archive')}
					/>
					<label title="Поиск"
						   htmlFor={'filterarchiveno'}
					>Не в архиве</label>
					<div data-name='isArchive'
						 onClick={dispatch_clear}
						 className={'clear_filter'}
					>Сбросить фильтр</div>
				</div>				
			</div>)
};

export {InputCheckboxArchive};