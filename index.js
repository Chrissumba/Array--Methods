// 1. sorting an array.

let employees = [
    { firstName: 'John', lastName: 'Doe', age: 27, joinedDate: 'December 15, 2017' },
    { firstName: 'Ana', lastName: 'Rosy', age: 25, joinedDate: 'January 15, 2019' },
    { firstName: 'Zion', lastName: 'Albert', age: 30, joinedDate: 'February 15, 2011' }
];

employees.sort((a, b) => a.age - b.age);

// 2.
function getLastElements(array, n) {
    if (n === undefined || n >= array.length) {
        return array.slice(-1)[0];
    } else if (n <= 0) {
        return [];
    } else {
        return array.slice(-n);
    }
}


//3. Nested for loop to print an array.

const a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 26, 7]
];

for (let i = 0; i < a.length; i++) {
    console.log(`row ${i}`);
    for (let j = 0; j < a[i].length; j++) {
        console.log(` ${a[i][j]}`);
    }
}

//4. Difference between two arrays.

function difference(array1, array2) {
    return array1.filter(item => !array2.includes(item)).concat(array2.filter(item => !array1.includes(item)));
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//5. 

function filter_array_values(arr) {
    return arr.filter(value => value || value === 0);
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));