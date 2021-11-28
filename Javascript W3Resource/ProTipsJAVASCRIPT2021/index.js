const array = [1, 2, 3, 3, 3, 4, 5, 2, 4, 2, 1, 5, 6, 7, 86, 7];
const unquieArr = [...new Set(array)];
// console.log(unquieArr);
let names = ['ruban', 'nirma', 'ruban', 'varun', 'nirma', 'ruban', 'varun', 'varun', 'varun', 'varun', 'varun']
let unquieNames = [...new Set(names)];
// console.log(unquieNames);

//  Destrucing;
const person = {
    name: "Truly",
    age: 27,
    education: {
        college: 'MCC collage'
    }
}
let { education: { college } } = person;// Destrucing
// console.log(person);


// tenary operator
const age = 18;
age > 15 ? console.log('You are under age') : console.log("you are big")

const agee = 40;
agee > 50
    ? agee > 70 ?
        console.log('you are getting really old')
        : console.log('you are between 30 and 59')
    : console.log('You are below 30')

const mark = 80;
mark > 80
    ? mark > 35 ? console.log("you are passed")

        : console.log("you are failed")
    : console.log("you got good mark")

// Number to string;
const age1 = 20 + "";
console.log(typeof age1);

//Fill arrays;
const users = Array(5).fill('goog')
// console.log(users);

// filter out unquie values
const masks = [1, 2, 3, 4, 3, 3, 4, 6, 7, 8, 1, 2];
const res = [...new Set(masks)];
// console.log(res);

// this is another way of setting unique values in arrays;
const userss = ['Ed', 'traversty daddy', 'john Dough', 'the unemployed', 'Anna', 'John dough', 'ruban', 'ruban'];
const newVal = Array.from(new Set(userss));
// console.log(newVal);

// dynamic way of adding new value into object
const dynamic = 'hobbies';
const employeeResume = {
    name: 'ruban',
    occupation: 'software Engineer',
    [dynamic]: 'sleep',
}
// console.log(employeeResume);
let fruits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fruits.length = 3;
let ree = fruits.splice(0, 5)
// console.log(ree);

//slice method;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
// console.log(numbers.slice(-3));

// arrays to objects
// const convertArraytoObj = { ...numbers };
// console.log(typeof convertArraytoObj);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,];
const changeNum = { ...num };
// console.log(changeNum);


