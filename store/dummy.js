const db = {
    'user': [
        { id: 1, name: 'Alejo'}
    ]
};

function list(table) {
    return db[table];
}

function get(table, id) {
    let collection = list(table);
    //Devuelve un arreglo con todos los que cumplan la condición
    return collection.filter( item => item.id === id)[0] || null;

    //Devuelve el primero que encuentra
    //return colection.find( item => item.id === id)[0] || null;
}

function upsert(table, data) {
    db[table].push(data);
}

function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}