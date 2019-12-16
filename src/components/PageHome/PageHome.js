import React, { Fragment} from 'react';
import { useHistory } from "react-router-dom";
import { createSortAction } from '../../actions/Actions.js';
import {Form} from './Form/Form.js';
import { HeaderPageHome } from './HeaderPageHome.js';
import { ListWorkersTable } from './ListWorkersTable/ListWorkersTable.js';

const PageHome = () => {
    return (
        <Fragment>
	    	<HeaderPageHome />
	 		<Form />
	 		<ListWorkersTable />
	    </Fragment>
    );
};

export {PageHome};