// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
// };

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
// const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
//  */
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];

//     console.log(`${key}: ${value}`);
// }

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */




// const fizzBuzz = function (n) {

//     for (let i = 1; i <= n; i++) {
//         console.log();

//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizbuzz");
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else {
//             console.log(i)
//         }

//     }
// }
// fizzBuzz(15)
// console.log(fizzBuzz(10));

// ? task 2

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// const sum = Object.values(salaries);

// let total = 0;

// for (const value of sum) {
//     total += value;

// }

// console.log(total);


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0;

// for (const key in salaries) {

//     sum += salaries[key];

// }


// console.log(sum);



// ? task 3

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     a: 1,
// };



// ? Task 4

// const item = {
//     products: ['Avocado', 'Brie', 'Wine'],
//     total: 3,
//     price: 370,
// }

// console.log(item);
// console.log(item.total);
// console.log(item.products);
// console.log(item['price']);


// ? Task 5

// const developers = {
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,

// };
// --------- FOR (IN)-------
// let totalDeveloper = 0;
// for (const key in developers) {
//     console.log(key);
//     console.log(developers[key]);
//     totalDeveloper += developers[key];

// }
// console.log('total: ', totalDeveloper);

//? --------- Object.keys() -----------

// const keys = Object.keys(developers);
// console.log(keys.length);

// let totalDeveloper = 0;

// for (const key of keys) {
//     console.log(key);
//     console.log(developers[key]);

//     totalDeveloper += developers[key];
// }
// console.log('total: ', totalDeveloper);

// ?--------------- Object.values() -----------

// const values = Object.values(developers);
// console.log(values.length);
// console.log(values);

// let totalDevelopers = 0;

// for (const value of values) {
//     console.log(value);
//     totalDevelopers += value;
// }

// console.log('TOTAL: ', totalDevelopers);

// ? ----- Object.entries() ---------

// console.log(Object.entries(developers));


// ? Task 6

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Ajax', online: true },
// ]
// console.table(friends);
// console.log(friends[2]);

// const nameToFind = 'Kiwi';
// for (const friend of friends) {
//     console.log(friend);

//     if (friend.name === 'Kiwi') {
//         console.log('friend is found');
//         break;
//     }

// }

// ? ***
// const findFriendByName = function (allFriends, name) {
//     for (const friend of allFriends) {
//         if (friend.name === name) {
//             return 'Found;)'
//         }
//     }
//     return 'Not found :('
// }

// console.log(findFriendByName(friends, 'Kiwi'));
// console.log(findFriendByName(friends, 'Poly'));

// ? ***
// const getAllNames = function (allFriends) {

//     const names = [];

//     for (const friend of allFriends) {
//         names.push(friend.name)
//     }
//     return names;
// }

// console.log(getAllNames(friends));

// // ? ***
// const getOnlineFriend = function (allFriends) {


//     const names = [];

//     for (const friend of allFriends) {

//         if (!friend.online) {
//             names.push(friend.name);
//         }
//     }
//     return names;
// }


// console.log(getOnlineFriend(friends));



//? keys:
// speed, color, isEngineOn, isLightOn

// ? methods:
// speedOn speedOff engineToggle lightToggle



let car = {

    speed: 0,
    color: 'silver black',
    isEngineOn: false,
    isLightOn: false,

    engineToggle() {
        car.isEngineOn = !car.isEngineOn;
        console.log(car.isEngineOn);

    },
    speedOn(n) {

        if (car.isEngineOn) {
            car.speed += n;
            console.log(`Speed is increased up to ${n} . Current speed: ${car.speed}`);
        } else {
            console.log('you should turn your engine on');
        }

    },

    speedOff(n) {

        if (car.isEngineOn) {
            car.speed = car.speed - n;
            console.log(`Speed is deacresed up to ${n} . Current speed: ${car.speed}`);
        } else {
            console.log('you should turn your engine on');

        }
    },

    lightToggle() {
        if (car.isEngineOn) {
            console.log(!car.isLightOn);

        } else {
            console.log(car.isLightOn);

        }
    },
}


car.engineToggle();
car.engineToggle();
car.engineToggle();
car.engineToggle();
car.speedOn(100);
car.engineToggle();
car.speedOn(100);
car.engineToggle();
car.speedOff();
car.engineToggle();
car.speedOff(35);
car.engineToggle();
car.speedOff(25);
car.engineToggle();
car.speedOff(10);
car.engineToggle();
car.speedOff(7);
car.engineToggle();
car.lightToggle();
car.engineToggle();
car.lightToggle();



"Увольте" сотрудника если он неактивен И(!) его зп больше 100
const workers = [
    { name: 'Alex', salary: 100, isActive: true },
    { name: 'Rita', salary: 80, isActive: false },
    { name: 'John', salary: 100, isActive: true },
    { name: 'Derek', salary: 200, isActive: false }
]











// car.speedOff();
// car.lightToggle();



// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// let result = 0;
// for (let key in obj) {



//     obj[key] > result ?  ? result = object[key] : "";
// }

