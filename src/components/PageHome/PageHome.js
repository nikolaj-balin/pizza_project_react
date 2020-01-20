import React, { Fragment, useCallback} from 'react';
import {Form} from './Form/Form.js';
import { HeaderPageHome } from './HeaderPageHome.js';
import { ListWorkersTable } from './ListWorkersTable/ListWorkersTable.js';
import {useDispatch} from "react-redux";
import {createClearPanelStateAction} from "../../actions/Actions";

const PageHome = () => {

	const dispatch = useDispatch();
	const dispatch_ClearPanelStateAction = useCallback((e) => {dispatch(createClearPanelStateAction(e.target))}, []);

    return (
        <Fragment>
	    	<HeaderPageHome onClick={dispatch_ClearPanelStateAction} />
	 		<Form onClick={dispatch_ClearPanelStateAction} />
	 		<ListWorkersTable onClick={dispatch_ClearPanelStateAction} />
	    </Fragment>
    );
};

export {PageHome};