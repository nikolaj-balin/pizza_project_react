const getObjStateElements = (id, data) => {

    if (id == 0) {
        return {
            name: '',
            phone: '',
            birthday: '',
            role: "driver",
            id: 0,
            isArchive: false
        };
    } else {

        let data_arr = [...data].filter((n, i) => n.id == id)[0];

        return {
            name: data_arr.name,
            phone: data_arr.phone,
            birthday: data_arr.birthday,
            role: data_arr.role,
            id: data_arr.id,
            isArchive: data_arr.isArchive
        };
    };

};


const verifying_form = (obj, setVerifyingValue) => {

    let flag_name = obj.name.length == 0;
    let flag_phone = obj.phone.replace(/\D/g, '').length < 11;
    let flag_birthday = obj.birthday.replace(/\D/g, '').length < 8;

    setVerifyingValue(Object.assign({}, { name: flag_name, phone: flag_phone, birthday: flag_birthday }));

    if (flag_name || flag_phone || flag_birthday) {
        return true;
    };

};

const getVerifyingObj = () => {
    return {
        name: false,
        phone: false,
        birthday: false
    }
};



const verifying_el_ = (e, stateVerifyingValue, setVerifyingValue, elementsFormValue) => {
    if (e.type == 'focus') {
        setVerifyingValue(Object.assign({}, stateVerifyingValue, {
            [e.target.name]: false }));
    } else if (e.type == 'blur') {

        switch (e.target.name) {
            case 'name':
                setVerifyingValue(Object.assign({}, stateVerifyingValue, {
                    [e.target.name]: elementsFormValue[e.target.name].length == 0 }));
                break;
            case 'phone':
                setVerifyingValue(Object.assign({}, stateVerifyingValue, {
                    [e.target.name]: elementsFormValue[e.target.name].replace(/\D/g, '').length < 11 }));
                break;
            case 'birthday':
                setVerifyingValue(Object.assign({}, stateVerifyingValue, {
                    [e.target.name]: elementsFormValue[e.target.name].replace(/\D/g, '').length < 8 }));
                break;
            default:
                break;
        }
    };
};

export {getObjStateElements, verifying_form, getVerifyingObj, verifying_el_};