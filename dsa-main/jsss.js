// * 0 0 0 * 

// var n = 9

// var result = ""
// for (var i = 0;i < n;i++){
//     if(i == 0 || i == n-1){
//         result = result + "* "
//     }
//     else{
//         result = result + "o "
//     }
// }
// console.log(result)

// var n = 3
// var result = ""
// if (n == 1) {
//     console.log("* *")
// }
// else {
//     for (var i = 0; i < n; i++) {
//         result = ""
//         for (var j = 0; j < n; j++) {
//             if (i == 0 || j == 0 || j == n - 1) {
//                 result = result + "* "
//             }
//             else {
//                 result = result + "  "
//             }
//         }
//         console.log(result)
//     }
// }


// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//         if (arr[j] > arr[j + 1]) {
//             arr[j] = arr[j] + arr[j + 1]
//             arr[j + 1] = arr[j] - arr[j + 1]
//             arr[j] = arr[j] - arr[j + 1]
//         }
//     }
// }
// var arr = [12, 18, 17, 65, 46]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {

//         if ((arr[i] % 6) > (arr[j] % 6) && arr[i] > arr[j]) {
//             arr[i] = arr[i] + arr[j]
//             arr[j] = arr[i] - arr[j]
//             arr[i] = arr[i] - arr[j]
//         }
//     }
// }

// console.log(arr.join(" "))


// var arr = ["Apple","Windows","UBANTU"]

// var item = arr.reduce(function(a,b){
//     return a.toLowerCase + "-" + b.toLowerCase
// })

//console.log('*')



// var input = input.trim()


// var str1 = ""
// var str2 = ""
// for (var i = 0; i < input.length; i++) {
//     if (input[i] == "a" || input[i] == "e" || input[i] == "i" || input[i] == "o" || input[i] == "u") {
//         str1 += input[i]
//     } else {
//         str2 += input[i]
//     }
// }
// console.log(str1 + str2)


// var arr = ['A', 'Raushan', 'Ranu', 'PRAKASH']

// var str = 'abcdefghijklmnopqrstuvwxyz'

// var count = 0
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         for (var k = 0; k < str.length; k++) {
//             if (arr[i][j] == str[k]) {
//                 count++
//             }
//         }
//     }
// }

// console.log(count)

// input = input.trim().split('\n')
// let size = Number(input[0])
// let arr = input[1].trim().split(' ').map(Number)
// //console.log(arr)

// let stack = [arr[0]]
// let ans = []
// ans[0] = -1
// for (let i = 1; i < size; i++) {
//     while (stack[stack.length - 1] >= arr[i] && stack.length > 0) {
//         stack.pop()
//     }
//     if (stack[stack.length - 1] == undefined) {
//         ans[i] = -1
//     } else {
//         ans[i] = stack[stack.length - 1]

//     }
//     stack.push(arr[i])
// }
// console.log(ans.join(' '))


// var input = "masaischool"

// count = 0;
// for (var i = 0; i < input.length; i++) {
//     if (input[i] != 'a' && input[i] != 'e' && input[i] != 'i' && input[i] != 'o' && input[i] != 'u') {
//         count++;
//     }
// }
// console.log(count);


//   a != a     flase
//   a != e     true 
//   a != i     true
//   a != o     true
//   a != u     true

// var input = `A A B A C D`
// var str = input.trim().split(" ")
// console.log(str.length)
// var obj = {}
// for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]] = obj[str[i]]) {
//         obj[str[i]] += 1
//     }
//     else {
//         obj[str[i]] = 1
//     }
// }
// console.log(obj)

// function p(a) {
//     if (a == 0) {
//         return 1
//     }
//     else {
//         return p(a - 1) + q(a - 1)
//     }
// }
// function q(a) {
//     if (a == 0) {
//         return 2
//     }
//     else {
//         return q(a - 1) + q(a - 1)
//     }
// }
// function main() {
//     console.log(p(q(3)))
// }

// main()
// console.log(2*2*2*2*2*2*2*2*2*2*2*2*2*2*2*2*2)

// function fibonacci(a) {
//     if (a <= 1)
//         return a
//     else
//         return fibonacci(a - 1) + fibonacci(a - 2)
// }
// console.log(fibonacci(5))

// function foo(n, r) {
//     if (n > 0) {
//         let x = Math.floor(n / r)
//         return ((n % r) + foo(x, r))
//     }
//     else
//         return 0
// }
// console.log(foo(345, 10))

// function fun(n) {
//     if (n == 0)
//         return;
//     else {
//         console.log(n % 2)
//         fun(Math.floor(n / 2))
//     }
// }
// function main() {
//     console.log(fun(25))
// }

// main()

// function fun(x, y) {
//     if (y == 0)
//         return 0
//     else
//         return (x + fun(x, y - 1))
// }

// function main() {
//     console.log(fun(3, 4))
// }

// main()

// function fun(arr, n) {
//     if (n == 1) {
//         return arr[0]
//     }
//     return Math.min(arr[n - 1], fun(arr, n - 1))
// }

// function main() {
//     var arr = [1, 3, -4, 2, 8, 0, -5]
//     console.log(fun(arr, arr.length))
// }

// main()
// var i = 0
// function count(x, y) {
//     if (y != 1) {
//         if (x != 1) {
//             i++
//             count(Math.floor(x / 2), y)
//         }
//         else {
//             y = y - 1
//             count(1024, y)
//         }
//     }
// }
// count(1024, 1024)
// console.log(i)


// var a = ['dog', 'cat', 'rat']
// a[100] = 'fox'
// console.log(a.length)

// console.log(sum(10, 20))
// (diff(10, 20))
// function sum(x, y) {
//     return x + y
// }
// var diff = function (x, y) {
//     return x - y
// }

// console.log(typeof(42))

// var arr = [1, 7, 5, 3, 4, 9]
// Bubble sort
// for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//             let temp = arr[i];
//             arr[i] = arr[j];
//             arr[j] = temp
//         }
//     }
// }
// console.log(arr)

// JavaScript program for Merge Sort
// var arr = [12, 11, 13, 5, 6, 7];
// var arr_size = arr.length;

// function mergeSort(arr, l, r) {
//     if (l >= r) {
//         return;
//     }
//     var m = l + parseInt((r - l) / 2);
//     mergeSort(arr, l, m);
//     mergeSort(arr, m + 1, r);
//     merge(arr, l, m, r);
// }
// function printArray(A, size) {
//     for (var i = 0; i < size; i++)
//         document.write(A[i] + " ");
// }

// function merge(arr, l, m, r) {
//     var n1 = m - l + 1;
//     var n2 = r - m;
//     var L = new Array(n1);
//     var R = new Array(n2);
//     for (var i = 0; i < n1; i++)
//         L[i] = arr[l + i];
//     for (var j = 0; j < n2; j++)
//         R[j] = arr[m + 1 + j];
//     var i = 0;
//     var j = 0;
//     var k = l;

//     while (i < n1 && j < n2) {
//         if (L[i] <= R[j]) {
//             arr[k] = L[i];
//             i++;
//         }
//         else {
//             arr[k] = R[j];
//             j++;
//         }
//         k++;
//     }
//     while (i < n1) {
//         arr[k] = L[i];
//         i++;
//         k++;
//     }
//     while (j < n2) {
//         arr[k] = R[j];
//         j++;
//         k++;
//     }
// }

// console.log(arr)


// var arr = [1, 2, 3];
// var result = [];
// result.push([]);

// for (var i = 1; i < (1 << arr.length); i++) {
//     var subset = [];
//     for (var j = 0; j < arr.length; j++) {
//         if (i & (1 << j)) {
//             subset.push(arr[j]);
//         }
//     }
//     result.push(subset);
// }

// console.log(result);

// function addUpTo(n) {
//     return n * (n + 1) / 2;
// }

// var time1 = performance.now();
// console.log(addUpTo(1000000000));
// var time2 = performance.now();
// console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)

// let obj = {
//     fname: "raushan",
//     age: 25
// }

// console.log(Object.keys(obj))
// console.log(Object.entries(obj))
// console.log(obj.hasOwnProperty("fname"))

// var str = 'aaaabbb'
// console.log(charCount("aa"))


// function charCount(str) {
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         if (/[a-z0-9]/.test(str[i])) {
//             if (obj[str[i]] > 0) {
//                 obj[str[i]]++;
//             } else {
//                 obj[str[i]] = 1;
//             }
//         }
//     }
//     return obj
// }

// function charCount(str) {
//     let obj = {};
//     for (let char of str) {
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj
// }
// function charCount(str) {
//     let obj = {};
//     for (let char of str) {
//         if (/[A-Za-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1
//         }
//     }
//     return obj
// }

// console.log(charCount("Hello12 !&"))


// function getYear() {
//     var year = new Date().getFullYear()
//     return year
// }

// getYear()
// console.log(year)

// console.log(name)

// name = "raushan"

// var arr = new Array(5).fill(0).map(function (a, b) { return b + 1 })

// console.log(arr)
// function al() {
//     var name = "masai"
//     console.log(this.name)
// }

// var name = "Ra"

// al()

// 'use strict'
// function print() {
//     console.log(this.name)
// }
// var persone = {
//     name: "raushan",
//     com: "masai",
//     print: print
// }
// persone.print()
// var name = "A"
// const a = ['A', "B", "C"]
// a[0] = "D"

// console.log(a)

// printname("raushan")
// var printname
// function printname(name) {
//     console.log("hello", name)
// }
// printname = function (name) {
//     console.log("hey", name)
// }
// var x = 10

// function a() {
//     var x = 20
//     function b() {
//         console.log(x)
//     }
//     return b
// }
// var g = a()

// g()

// p("raysha")
// var p = function (n) {
//     console.log("h", n)
// }
// console.log(name)
// name = "name"
// var name

// const prod = (x) => {
//     x = x + 5
//     return innner => (x * innner)
// }
// prod(5)(10)
// let f = "r"
// let l = "s"
// const g = { f, l }
// console.log(typeof []);
// function g() {
//     let s = true
//     if (s) {
//         const n = "masai"
//     }
//     console.log(n)
// }

// g()

// function g() {
//     var x = 10
//     this.b()
// }
// function b() {
//     var x = 20
//     console.log(this.x)
// }
// g()

// console.log(typeof function () {

// })

// function name(x) {
//     var y = x * 10
//     function v(z) {
//         console.log(x, y, z)
//     }
//     v(y * 5)
// }
// name(3)
// n = "ra"

// var n
// console.log(n)

// console.log(naa)
// var naa = "raushan"

// const found = array1.find(element => element = 130);

// console.log(found);

// const array = [
//     { fname: "Raushan", age: 25 },
//     { fname: "Ranu", age: 22 },
//     { fname: "Bha", age: 35 },
//     { fname: "Prakash", age: 28 },
//     { fname: "Rahul", age: 18 },
//     { fname: "SonRu", age: 31 },
// ];

// console.log(array.sort((a, b) => (a.age - b.age)));

// let fill = array.filter((el) => {
//     if (el.fname[0] == "R") {
//         return el
//     }
// })

// console.log(fill)

// check('ha')

// function check(iname) {
//     console.log(array.findIndex((el) => {
//         return el.fname == iname
//     }))
// }

