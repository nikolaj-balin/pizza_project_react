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
        arrList.map((n, i) => (
            <li key={n.id}>
				<div><span>{translatorRU_tableHeader[key[1]]}</span><span>{n.name}</span></div>
				<div><span>{translatorRU_tableHeader[key[5]]}</span><span>{n.birthday}</span></div>
				<div><span>{translatorRU_tableHeader[key[4]]}</span><span>{n.phone}</span></div>
				<div><span>{translatorRU_tableHeader[key[3]]}</span><span>{translatorRU_role[n.role]}</span></div>
				<div><span>{translatorRU_tableHeader[key[2]]}</span><SpanArchiv flag={n.isArchive}></SpanArchiv></div>
                <button onClick={() => history.push(`/edit/${n.id}`)}>Редактировать</button>
                
			</li>
        ))

    );
};

const ListWorkersTable = () => {
    return (
        <section className="ListWorkers">
            <ListWorkers />
    	</section>
    )
};


export {ListWorkersTable};