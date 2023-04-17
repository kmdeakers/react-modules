import fruits from "./foods";
import { choice, remove } from "./helpers";

const fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please.`);

console.log(`Here you go: ${fruit}.`);

console.log("Delicious! May I have another?");

remove(fruits, fruit);

const fruitsLeft = fruits.length;

console.log(`I'm sorry, we're all out. We have ${fruitsLeft} left.`);