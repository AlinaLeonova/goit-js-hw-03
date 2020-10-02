let message = '';
const user = {
    age: 20,
    hobby: 'html',
    name: 'Mango',
    premium: true,
};


user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
user['full time'] = true;

const keys = Object.keys(user);
// console.log(Object.keys(user));
// const values = Object.values(user);
// console.log(Object.values(user));

for (let key of keys) {

    // console.log('Key: ', user[key]);

    let value = user[key];
    message += `${key}: ${value}\n`
    console.log(message);
}

