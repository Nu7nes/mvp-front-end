export function formatDate(date) {
    let initialValue = date.split("-").join("/");
    let orderned = [
        initialValue[8],
        initialValue[9],
        initialValue[7],
        initialValue[5],
        initialValue[6],
        initialValue[4],
        initialValue[0],
        initialValue[1],
        initialValue[2],
        initialValue[3],
    ].reduce((accumulator, currentValue) => accumulator + currentValue);
    return orderned;
}
