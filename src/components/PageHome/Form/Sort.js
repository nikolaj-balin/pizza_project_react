import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {createSortAction, clearPanelStateAction} from '../../../actions/Actions.js';


const Sort = () => {

		const dispatch = useDispatch();
		const state_ = useSelector(state => {return {...state}});
		const sort = state_.sort;
		const state_panel = state_.state_panel;
		const dispatch_starting = useCallback((e) => {
			dispatch(createSortAction(e.target)) 
		}, []);
		const dispatch_state_panel = useCallback((e) => {dispatch(clearPanelStateAction(e.currentTarget))}, []);
	
		return (
			<div className={'sort' + (state_panel.sort == 1 ? ' open' : '') + (sort != 'none' ? ' select' : '')}
				 data-name={'sort'}
				 data-value={state_panel.sort}
				 onClick={(e) => {
					 e.stopPropagation();
					 if(e.target.tagName != 'LABEL' ) {
						 dispatch_state_panel(e)
					 }
				 }}
			>
				<span className='sort_button'>Сортировать</span>
				<div className={'sort_body' + (state_panel.sort == 1 ? ' open' : '')}>
					<input type="checkbox"
						   name='sort'
						   id={'none_sort'}
						   value='none'
						   className={sort == 'none' ? 'checked' : ''}
						   onChange={dispatch_starting}
						   checked={sort == 'none'}
					/>
					<label title="Сортировка"
						   htmlFor={'none_sort'}
					>По умолчанию
					</label>
					<input type="checkbox"
						   name='name'
						   value='ASC_NAME'
						   id={'name_sortasc'}
						   onChange={dispatch_starting}
						   className={sort == 'ASC_NAME' ? 'checked' : ''}
						   checked={sort == 'ASC_NAME'}
					/>
					<label title="Сортировка"
						   htmlFor={'name_sortasc'}
					>По имени
					</label>
					<input type="checkbox"
						   name='name'
						   value='DESC_NAME'
						   className={sort == 'DESC_NAME' ? 'checked' : ''}
						   id={'name_sortdesc'}
						   onChange={dispatch_starting}
						   checked={sort == 'DESC_NAME'} />
					<label title="Сортировка"
						   htmlFor={'name_sortdesc'}
					>По имени
					</label>
					<input type="checkbox"
						   name='birthday'
						   id={'date_sortasc'}
						   value='ASC_BIRTHDAY'
						   onChange={dispatch_starting}
						   className={sort == 'ASC_BIRTHDAY' ? 'checked' : ''}
						   checked={sort == 'ASC_BIRTHDAY'}
					/>
					<label title="Сортировка"
						   htmlFor={'date_sortasc'}
					>По дате
					</label>
					<input type="checkbox"
						   name='birthday'
						   id={'date_sortdesc'}
						   value='DESC_BIRTHDAY'
						   onChange={dispatch_starting}
						   className={sort == 'DESC_BIRTHDAY' ? 'checked' : ''}
						   checked={sort == 'DESC_BIRTHDAY'}
					/>
					<label title="Сортировка"
						   htmlFor={'date_sortdesc'}
					>По дате
					</label>
				</div>
			</div>
		)
};

export {Sort};