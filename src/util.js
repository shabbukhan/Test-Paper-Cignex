export const compareByProperty = (key, sortBy) => (a, b) =>{
    a = parseInt(a[key]);
    b = parseInt(b[key]);
    return sortBy === 'ASC' ? a-b : sortBy === 'DES' ? b-a : a-b;
}

//console.log('util')