import React, { Fragment, useMemo, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, useHistory } from "react-router-dom";
import { add_worker, edit_worker } from '../../../actions/Actions.js';
import MaskedInput from 'react-maskedinput';
import { translatorRU_role } from '../../../translators/translatorRU.js';
import { getObjStateElements, verifying_form, getVerifyingObj, verifying_el_} from './functionsFormEditWorkers.js';


const FormEditWorkers = (props) => {

    const dispatch = useDispatch();
    let data = useSelector(store => [...store.data]);
    let { id } = useParams();
    let history = useHistory();

    let [elementsFormValue, setElementsFormValue] = useState(() => {
        return getObjStateElements(id, data);
    });
    let [stateVerifyingValue, setVerifyingValue] = useState(() => {
        return getVerifyingObj();
    });

    let addWorkersTable = useCallback((obj) => {
        dispatch(add_worker(obj));
    }, []);

    let editWorkersTable = useCallback((obj) => {
        dispatch(edit_worker(obj));
    }, []);

    let handleSubmit = (e) => {
        event.preventDefault();

        if (verifying_form(elementsFormValue, setVerifyingValue)) {
            return;
        };

        if (elementsFormValue.id == 0) {
            addWorkersTable({ ...elementsFormValue });
        } else {
            editWorkersTable({ ...elementsFormValue });
        }

        history.push(`/`)
    };

    const cancelEdit = (e) => {
        history.goBack()
    };

    const _onChange = (e) => {
        setElementsFormValue(Object.assign({}, elementsFormValue, {
            [e.target.name]: e.target.value }));
    };

    const _onChange_ = (e) => {
        setElementsFormValue(Object.assign({}, elementsFormValue, {
            [e.target.name]: e.target.checked }))
    };

    const verifying_el = (e) => verifying_el_(e, stateVerifyingValue, setVerifyingValue, elementsFormValue);



    return (
        <form onSubmit={handleSubmit}>        
        <label title="Пользователь:">Пользователь:
        		<input autoComplete="off" 
        				 type="text" 
        				 name="name" 
        				 value={elementsFormValue.name} 
        				 placeholder="Введите фамилию и имя сотрудника" 
        				 onChange={_onChange} 
        				 onFocus={verifying_el} 
        				 onBlur={verifying_el} />
        	</label>
        {stateVerifyingValue.name && <span>Имя заполнено не верно</span>}

        <label title="Дата Рождения:">Дата рождения:
        		<MaskedInput autoComplete="off" 
	  						 mask="11.11.1111" 
	  						 size="17" 
	  						 name="birthday" 
	  						 value={elementsFormValue.birthday} 
	  						 onChange={_onChange} 
	  						 onFocus={verifying_el} 
	  						 onBlur={verifying_el} />
        	</label>
        {stateVerifyingValue.birthday && <span>Дата заполнена не верно</span>}

        <label title="Телефон">Телефон:
        		<MaskedInput autoComplete="off" 
    						 type="tel" 
    						 mask="+7 (111) 111-11-11" 
    						 name="phone" 
    						 size="17" 
    						 placeholder="+7 (___) ___-__-__" 
    						 value={elementsFormValue.phone} 
    						 onChange={_onChange} 
    						 onFocus={verifying_el} 
    						 onBlur={verifying_el} />
        </label>
        {stateVerifyingValue.phone && <span>Телефон заполнена не верно</span>}

        <label title="Должность">Должность:
          <select name="role" 
          			defaultValue={elementsFormValue.role} 
          			placeholder="Выберите должность" 
          			onChange={_onChange}>

	            <option key="driver" 
	            		  value="driver">
	            		  {translatorRU_role['driver']}
	            </option>
	            <option key="waiter" 
	            		  value="waiter">
	            		  {translatorRU_role['waiter']}
	            </option>
	            <option key="cook" 
	             		  value="cook">
	             		  {translatorRU_role['cook']}
	            </option>
          </select>
        </label>

        <label title="В архиве">В архиве:
        			<input autoComplete="off" 
        					 type="checkbox" 
        					 name="isArchive" 
        					 defaultChecked={elementsFormValue.isArchive} 
        					 onChange={_onChange} />
        	</label>

        <input name="id" type="hidden" defaultValue={id} />
        <input type="submit" value="Сохранить" />
        <input type="button" value="Отмена" onClick={cancelEdit} />
    </form>)};


FormEditWorkers.propTypes = {
    data: PropTypes.array.isRequired
}

FormEditWorkers.defaultProps = {
    data: []
}

export { FormEditWorkers };