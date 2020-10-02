const findBestEmployee = function (employees) {

    let result = 0;
    let name = '';

    for (let key in employees) {
        employees[key] > result ? ((result = employees[key]), (name = key)) : "";


    }
    return name

};

const developers = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

console.log(findBestEmployee(developers));


const supports = {
    poly: 12,
    mango: 17,
    ajax: 4,
};
console.log(findBestEmployee(supports));


const sellers = {
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
}
console.log(findBestEmployee(sellers));

