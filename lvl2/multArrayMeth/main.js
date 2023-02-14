//1. Returns a list of everyone older than 18, which is  =>   filter()
// 2. sorted alphabetically by last name, and where  => sort()
// 3. each name and age is embedded in a string that looks like an HTML `<li>` element. =>map()

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]



function sortedOfAge(arr){
return arr.filter((person)=> person.age > 18)
.sort((a,b)=> a.lastName.localeCompare(b.lastName))    
.map(person => ' <li> ' + person.firstName + ' ' +  person.lastName + ' is ' + person.age + ' </li>')}


console.log(sortedOfAge(peopleArray));

// function sortedOfAge(arr){
//     return arr.sort((a,b)=> a.firstName.localeCompare(b.firstName))
// }

// console.log(sortedOfAge(peopleArray));
// /*
// Output:
// [
//     "<li>Kyle Mooney is 27</li>",
//     "<li>Sarah Palin is 47</li>",
//     "<li>Rick Sanchez is 78</li>",
//     "<li>Morty Smith is 29</li>",
//     "<li>Lev Tolstoy is 82</li>"
// ]
// */
