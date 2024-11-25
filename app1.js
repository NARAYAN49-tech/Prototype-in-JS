

let ar = [5,3,5,6,4,5];
let arr = [1,2,3];
arr.sayHello = () => {
    console.log("Hello, I am array");
};
console.log(arr.__proto__(ar));
ar.sayHello = () => {
    console.log("Hello, I am array");
};