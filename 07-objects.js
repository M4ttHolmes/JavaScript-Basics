// let zelda = {
//     name: "Zelda",
//     age: 17,
//     title: "Princess",
//     isCaptured: true,
//     username: "rupeezzz",
//     power: "Triforce Business",
//     toughness: 9000
// };

// Objects can be stored in variables.
// Objects always use curly braces {} surrounding the data contained within it.
// name, age, title, and isCaptured are properties or keys of the object. Each has a colon : preceeding the value.
// Each of the properties has a value. "Zelda" 17 "Princess" true.

// console.log(zelda);
// console.log(zelda.name);
// console.log(zelda.age);
// console.log(zelda.middleName); // undefined: middleName does not exist

//Practice Challenges

// console.log(zelda.title);
// console.log(zelda.isCaptured);
// console.log(zelda.username);

let m4ttholmes = {
    firstName: "Matt",
    lastName: "Holmes",
    age: 38,
    birthDay: "Dec 22nd"
};

console.log(`${m4ttholmes.firstName} ${m4ttholmes.lastName}`);

let movie = {
    title: "Star Wars",
    episode: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    factions: ["Galactic Empire", "The Rebellion", "Jedi", "Sith"]
};

console.log(movie.title);
console.log(movie.episode[4]);
console.log(movie.factions[2]);