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
        e.preventDefault();

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
        <div className={'readForm'}>
            <form onSubmit={handleSubmit}>
                <div className={'userfield' + (stateVerifyingValue.name ? ' error' : '')}>
                    <input autoComplete="off"
                           type="text"
                           name="name"
                           value={elementsFormValue.name}
                           placeholder="Фамилия и имя сотрудника"
                           onChange={_onChange}
                           onFocus={verifying_el}
                           onBlur={verifying_el}
                    />
                    {stateVerifyingValue.name && <span className={'errorinfotext'}>Имя заполнено не верно</span>}
                </div>
                <div className={'datefield'  + (stateVerifyingValue.birthday ? ' error' : '')}>
                    <MaskedInput autoComplete="off"
                                 mask="11.11.1111"
                                 placeholder="Дата рождения"
                                 size="17"
                                 name="birthday"
                                 value={elementsFormValue.birthday}
                                 onChange={_onChange}
                                 onFocus={verifying_el}
                                 onBlur={verifying_el}
                    />
                    {stateVerifyingValue.birthday && <span className={'errorinfotext'}>Дата заполнена не верно</span>}
                </div>
                <div className={'phonefield'  + (stateVerifyingValue.phone ? ' error' : '')}>
                    <MaskedInput autoComplete="off"
                                 type="tel"
                                 placeholder="Телефон"
                                 mask="+7 (111) 111-11-11"
                                 name="phone"
                                 size="17"
                                 value={elementsFormValue.phone}
                                 onChange={_onChange}
                                 onFocus={verifying_el}
                                 onBlur={verifying_el} />
                    {stateVerifyingValue.phone && <span className={'errorinfotext'}>Телефон заполнена не верно</span>}
                </div>
                <div className={'rolefields'}>
                    <label title="Должность" >Должность:</label>
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
                </div>
                <div className={'archivefield'}>
                    <span className={'icon'}>В архиве:</span>
                    <input autoComplete="off"
                           type="checkbox"
                           id={'archive_el'}
                           name="isArchive"
                           defaultChecked={elementsFormValue.isArchive}
                           onChange={_onChange_}
                    />
                    <label htmlFor={'archive_el'} title="В архиве" ></label>
                </div>
                <div className={'save'}>
                    <input name="id" type="hidden" defaultValue={id} />
                    <input type="submit" value="Сохранить"  />
                    <input type="button" value="Отмена" onClick={cancelEdit} className={'cancel'} />
                </div>

            </form>
        </div>
        )};


FormEditWorkers.propTypes = {
    data: PropTypes.array.isRequired
}

FormEditWorkers.defaultProps = {
    data: []
}

export { FormEditWorkers };