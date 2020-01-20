import React from 'react';
import { useHistory } from "react-router-dom";
import { InputSearch } from './InputSearch.js';
import { InputCheckboxArchive } from './InputCheckboxArchive.js';
import { Junior } from './Junior.js';
import { Sort } from './Sort.js';


const Form = (props) => {

	let history = useHistory();

	return (
		<aside className="FilterForm" {...props}>
		    <form>
		    		<InputSearch />
					<InputCheckboxArchive />
				   <Junior />
				   <Sort />
				   <input className='form_submit' type="button" onClick={() => history.push(`/edit/0`)} value="Добавить сотрудника"/>
			 </form>
		</aside>
	)
};

export {Form};