const number = [1, 5, 3, 6, 7];
const players = [75, 65, 67, 72, 55, 59];
const friends = ['Tom', 'John', 'Micheal', 'Oliver'];

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p % 2 === 1);
// const selected = players.filter(p => p % 2 === 0);
// console.log(selected);

const selected = friends.filter(fnd => fnd.length % 2 === 1);
console.log(selected);

