
let nameList = [
    {
    name: "Bob", 
    department: "sales", 
    title: "sales manager",
    },

    {name: "Tina", department: "finance", title: "director of finance"},

    {name: "Randy", department: "IT", title: "hardware guy"},

    {name: "Glenda", department: "C-suite", title: "CEO"}
]

for (i = 0; i < nameList.length; i++){
    console.log(`${nameList[i].name}'s job title is ${nameList[i].title}`);
}
