
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

// let array1 = [45, "I",true,null,"am",3.56,"a",undefined, {catchphrase: "Oh hai, Mark"}, "JS","rockstar"]
// function makeArray() {
// for (i = 0; i < array1.length; i++) {
    
//     array2 = JSON.stringify(array1);
//     console.log(array2);
   
//     }
    
// }
// makeArray();
// let ages = [12,23,89,16,34,19,2,7,45,50,26,102]



// for (let i= 0; i <ages.length; i++){
// let fave_demo = [];    
//        if (ages[i]>18 && ages[i] < 49){
//            fave_demo.push(ages[i]);       
//        }
//        console.log(fave_demo);
// }

// let ages = [12,23,89,16,34,19,2,7,45,50,26,102]
// let fave_demo = [];
// ages.forEach((age)) => {
//     if (age < 50 && age > 17) fave_demo.push(age)
// });
// console.log(fave_demo);

// let ages = [12,23,89,16,34,19,2,7,45,50,26,102];
// let fave_demo = ages.filter((age) => age < 50 && age > 17);

// let hitchhikers_guide = {
//     characters:["Zaphod", "Arthur","Ford","Trillian"],
//     catchphrase:"Don't Panic",
//     random_facts:{
//         copies_sold:14000000,
//         formats:["radio","TV","film","graphic novel"],
//         ultimate_answer:{
//             meaning_of_life:42
//         }
//     }
// };
// hitchhikers_guide.random_facts.ultimate_answer.meaning_of_life;
// let meaning = "meaning_of_life";
// hitchhikers_guide.random_facts.ultimate_answer[meaning];

let yoda_quote = ["the","greatest","teacher","failure","is"];

yoda_quote[0].toUpperCase(0);
yoda_quote.splice(3, 0, ",");
// yoda_quote.splice(0,0,"Yoda says,");
console.log(yoda_quote);
let joined = yoda_quote.join(" ");
console.log(joined);
let newjoined = joined.charAt(0).toUpperCase()+joined.slice(1);
console.log(newjoined);
let output = document.getElementById("output");
output.innerHTML =`"Yoda says, ${newjoined}"`;

