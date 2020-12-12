import firebase from "../../firebase";

const db = firebase.ref("/chemicals");

const dbShow = firebase.ref("/chemicalTest");

const getAll = () => {
    return db;
};
const getAllShow = () => {
    return dbShow;
};

const create = (data) => {
    return db.push(data);
};

const update = (key, data) => {
    return db.child(key).update(data);
};

const remove = (key) => {
    return db.child(key).remove();
};

const removeAll = () => {
    return db.remove();
};

export default {
    getAllShow,
    getAll,
    create,
    update,
    remove,
    removeAll,
};