
// let nameList = [
//     {
//     name: "Bob", 
//     department: "sales", 
//     title: "sales manager",
//     },

//     {name: "Tina", department: "finance", title: "director of finance"},

//     {name: "Randy", department: "IT", title: "hardware guy"},

//     {name: "Glenda", department: "C-suite", title: "sales manager"},
    
// ]

// for (i = 0; i < nameList.length; i++){
//     console.log(`${nameList[i].name}'s job title is ${nameList[i].title}`);
// }

// let name = "Fred";  // new in ES6
// let job = () => "I do the things";
// let number = 4;

// let myCollection = {
//     name,
//     job,
//     number
// };

// let myArr = ["Fred", true, 5, "This array is a mess"];

// let nums = [1,2,3];
// let newArr = nums.map( thing => {
//     return thing * 2 ; 
// });
// console.log("newArr", newArr);

// let newerArr = nums.filter( (thing) => {
//     return thing % 2 === 0;
// });
// console.log("newerArr", newerArr);

// let salesManagers = nameList.filter((thing) => {
//     return nameList[i].title === "sales manager"
// });
// console.log("sales manager", salesManagers);

//exercise 2

// let obj = {
//     one: 1,
//     two: "two",
//     three: ()=>console.log("prop"),
// };

// let obj2 = {

//     four: 4,
//     five: 5,
//     six: obj,
// };

//exercise 3

let array1 = [45, "I",true,null,"am",3.56,"a",undefined, {catchphrase: "Oh hai, Mark"}, "JS","rockstar"]

for (i = 0; i < array1.length; i++) {
    array2 = [];
    array2 = JSON.stringify(array1);
    console.log(array2);
   
}

