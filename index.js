var myObj = { one: 1, two: 2, three: 3 }
// var res = [];
// res.push(myObj)
// res.map((x) => {
//     console.log(x);
// })
// var res = Object.keys(myObj);
// console.log(res);
// var res = Object.values(myObj);
// console.log(res);

// const data = { one: 1, two: 2, three: 3 };
// let result = Object.keys(data);
// console.log(result);
// let newResult = result.map((e, i) => `${e} ${i}`);
// console.log(newResult.toString())


// function abc() {
//     console.log(arguments.callee.name);
//     return
// }
// console.log(abc());

// Javascript which returns the n rows by n colums idetity Matrix
// function maxtrix(n) {
//     var i;
//     var j;
//     for (i = 0; i < n; i++) {
//         console.log(n);
//         for (j = 0; j < n; j++) {
//             if (i === j) {
//                 console.log("1");
//             } else {
//                 console.log(" 0 ");
//             }
//             console.log("------------------");
//         }
//     }
// }
// console.log(maxtrix(5));


// second lowest number and secomd Greaest numbers 
// function findGreatestNumber(num) {
//     num.sort(function (x, y) {
//         return x - y
//     })
//     var unique = [num[0]];
//     var result = [];

//     for (var j = 1; j < num.length; j++) {
//         if (num[j - 1] !== num[j]) {
//             unique.push(num[j]);
//         }
//     }

// }


//output





// body={
//     filter:{
//     gender_name: 'd',
//     status: true
//     }
//     sort:{
//     code:1
//     }
//     }
const { isEmpty } = require('lodash');
let dataState = {
    filters: {
        filter: [{ field: 'gender_name', value: 'd' }, { field: 'status', value: 'd' }]
    }
}
let body = {};
// let filterVal = dataState?.filters?.filter?.map((value) => {
//     console.log(value);
//     let data = Object.keys(value);
//     console.log(data);
//     let values = Object.values(value);
//     console.log(values);
//     if (isEmpty(value.field)) {


//     }

// })


const array1 = [1, 2, 3, 4, 5];
const reducer = (prev, current) => prev + current;

console.log(array1.reduce(reducer));