// Variable Data Type Example 1 - number
let example1 = 1;
let example1_1 = 10 % 9;
console.log(example1);
console.log(example1_1);

// Variable Data Type Example 2 - string
let example2 = "2";
let example2_2 = "Example Number Two!"
console.log(example2);
console.log(`This is ${example2_2}`);
console.log("This is also " + example2_2);

// Variable Data Type Example 3 - boolean
let example3 = true;
let example3_3 = false;
console.log(example3 && example3_3);    // will return FALSE. Only one has a value of true
console.log(example3 || example3_3);    // will return TRUE. Only one needs to be true
console.log(example3 != example3_3);    // will return TRUE, since these values are not the same

// Variable Data Type Example 4 - object
let user = {
    username: "m4ttholmes",
    firstName: "Matt",
    lastName: "Holmes",
    birthDay: "December 22nd",
    birthCity: "Lafayette",
    birthState: "Indiana"  
}  
console.log(`${user.firstName} was born on ${user.birthDay} in ${user.birthCity}, ${user.birthState}.`)

// Variable Data Style Example 5 - object + array
let movie = {
    title: "Star Wars",
    episode: ["Episode IV", "Episode V", "Episode VI"],  // the only ones that matter
    faction: ["The Galactic Empire", "The Rebellion", "The Jedi Order", "The Sith Apprenticeship"],
}
console.log(`${movie.title} ${movie.episode[1]} is my favorite movie. ${movie.faction[2]} is particularly badass.`);


// Hello World Function Example
function fullGreeting(firstWord, secondWord) {
    let fullGreeting = firstWord + ", " + secondWord + "!";
    return fullGreeting;
}
console.log(fullGreeting("Hello", "World"));