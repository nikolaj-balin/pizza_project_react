import React, { Fragment} from 'react';
import { useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { get_filter_arr, get_sort_arr} from './functionsListWorkersTable.js';
import { translatorRU_tableHeader, translatorRU_role } from '../../../translators/translatorRU.js';

const SpanArchiv = ({ flag }) => {

    let text = '-----';
    if (flag) {
        text = 'В архиве';
    };

    return (
        <span>{text}</span>
    );
};

const ListWorkers = () => {

    let store_ = useSelector(store => { return { ...store } });
    let arrList = store_.data;
    let history = useHistory();
    let key = Object.keys(arrList[0]);

    arrList = get_filter_arr(arrList, store_);

    arrList = get_sort_arr(arrList, store_);

    return (
        <ul className="list">
            {arrList.map((n, i) => (
                <li key={n.id}>
                    <div className="avatar_worker"></div>
                    <div className={'worker_list'}>
                        <div className='name_worker' title={translatorRU_tableHeader[key[1]]}>
                            <span className={'label'}></span>
                            <span>{n.name}</span>
                        </div>
                        <div className='birthday_worker' title={translatorRU_tableHeader[key[5]]}>
                            <span className={'label'}></span>
                            <span>{n.birthday}</span>
                        </div>
                        <div className='phone_worker' title={translatorRU_tableHeader[key[4]]}>
                            <span className={'label'}></span>
                            <span>{n.phone}</span>
                        </div>
                        <div className='role_worker' title={translatorRU_tableHeader[key[3]]}>
                            <span className={'label'}></span>
                            <span>{translatorRU_role[n.role]}</span>
                        </div>
                        <div className='isArchive_worker' title={translatorRU_tableHeader[key[2]]}>
                            <span className={'label'} ></span>
                            <SpanArchiv flag={n.isArchive}></SpanArchiv>
                        </div>
                    </div>
                    <button className='button_edit_worker' onClick={() => history.push(`/edit/${n.id}`)}>Редактировать</button>

                </li>
            ))}
        </ul>


    );
};

const ListWorkersTable = (props) => {
    return (
        <section className="ListWorkers" {...props}>
            <ListWorkers />
    	</section>
    )
};


export {ListWorkersTable};