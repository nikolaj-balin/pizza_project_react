const get_sort_value = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};

const sort_arr = (arr, value) => {

	 let n = 1;
	 if(value === 'DESC_NAME' || value === 'DESC_BIRTHDAY'){
	 	n = -1;
	 };

    if (value === 'ASC_BIRTHDAY' || value === 'DESC_BIRTHDAY') {
        arr.sort((a, b) => {
            let a_arr = a['birthday'].split('.');
            let b_arr = b['birthday'].split('.');
            let a_r = new Date(a_arr[2], a_arr[1], a_arr[0]).getTime();
            let b_r = new Date(b_arr[2], b_arr[1], b_arr[0]).getTime();
            return get_sort_value(a_r, b_r)*n;
        });

    } else if(value === 'ASC_NAME' || value === 'DESC_NAME') {
        arr.sort((a, b) => {
            return get_sort_value(a['name'], b['name'])*n;
        });
    }

    return arr;

};

const get_filter_arr = (arr, store) => {

    let store_ = { ...store };
    let arr_ = [...arr];
    let name = store_.search.name.trim();
    let isArchive_arr = store_.search.isArchive;
    let role_arr = store_.search.role;
    let map = new Map();

    map.set(true, "archive").set(false, "no_archive");

    if (name !== '') {
        arr_ = arr_.filter((item) => {
            return item.name.search(new RegExp(name, 'i')) != -1;
        });
    };

    if(isArchive_arr.length !== 0){
        arr_ = arr_.filter((item) => {
            return isArchive_arr.includes(map.get(item.isArchive))
        });
    };

     if(role_arr.length !== 0){
        arr_ = arr_.filter((item) => {
            return role_arr.includes(item.role);
        });
     };    

    return arr_;

};

const get_sort_arr = (arr, store) => {

    let arr_ = [...arr];
    let sort = store.sort;

    if(sort !== 'none'){
        arr_ = sort_arr(arr_, sort);
    };

    return arr_;

};


export {get_filter_arr, get_sort_arr};