import React from 'react';
import {useParams} from "react-router-dom";


const HeaderFormEditWorkers = () => {

	let { id } = useParams();

	return (
		<header id="header" className="header">
			<h1>{id == 0 ? 'Добавление сотрудника' : 'Редактирование сотрудника'}</h1>
		</header>
	);

};

export {HeaderFormEditWorkers};