const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? :) ", (name) => {
rl.question("What's an activity you like doing? ", (activity) => {
rl.question("What do you listen to while doing that? ", (music) => {
rl.question("Which meal is your favorite (e.g., dinner, brunch, etc.)? ", (meal) => {
rl.question("What's your favorite thing to eat for that meal? ", (favoriteFood) => {
rl.question("Which sport is your absolute favorite? ", (sport) => {
rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
console.log(`Thank you for answering the questions!\n\nName: ${name}\nActivity: ${activity}\nMusic: ${music}\nFavorite Meal: ${meal}\nFavorite Food: ${favoriteFood}\nFavorite Sport: ${sport}\nSuperpower: ${superpower}`);
rl.close();
    });
    });
    });
    });
    });
    });
    });
