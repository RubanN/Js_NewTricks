// Longest word
function longWord(str) {
    let array1 = str.match(/\w[a-z]{0,}/gi);
    var res = array1[0];
    for (var x = 1; x < array1.length; x++) {
        console.log(x);
        if (res.length < array1[x].length) {
            console.log(res.length);
            res = array1[x]
        }
    }
    return res;
}
// console.log(longWord("Elon musk is the best BusiesnessMan in the world"));
const people = [
    {
        name: "Dom",
        occupation: "Software Developer"
    },
    {
        name: "Eric",
        occupation: "Dentist"
    },
    {
        name: 'Kate',
        occupation: "Hair Dresser"
    }
]
function isDentist(person) {
    return person.occupation === 'Dentist'
}
// console.log(people.findIndex(isDentist));

//Find vowels;
function findVowels(str) {
    var vowels = "aeiouAEIOU";
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (vowels.indexOf(str[i]) !== -1) {
            count += 1;
        }
    }
    return count
}
// console.log(findVowels('The quick brown fox'));

//Javascript function that accepts a number as a parameter and check the numbers is prime or not.
function prime(n) {
    if (n == 1) {
        console.log(n);
        return false;
    }
    else if (n === 2) {
        console.log(n);
        return true;
    } else {
        for (var x = 2; x < n; x++) {
            console.log(x);
            if (n % x === 0) {
                console.log(x);
                return false
            }
        }
        return true;
    }
}
console.log(prime(36));