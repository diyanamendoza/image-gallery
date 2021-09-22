export function uniqueArray(arrayWithDupes) {
    let newArray = [];
    arrayWithDupes.forEach((entry) => {
        if(!newArray.includes(entry)) {
            newArray.push(entry);
        }
    })
    return newArray;
}