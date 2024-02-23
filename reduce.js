const players = [75, 65, 67, 72, 55, 59, 79];

const selected = players.reduce((p,c) => p + c,  0);
console.log(selected);