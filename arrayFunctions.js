// Watch this:
// 1. https://www.youtube.com/watch?v=G6J2kl1aVao
// 2. https://www.youtube.com/watch?v=3LOEGS4qcRM&t=8s
// Install "Code Runner Extension" in VSCode
// * Map & Filter Functions Exercise

const items = [1, 2, 3, 4, 5, 6];

// 1 - change array to [1,4,9,16,25,36]
// const newItems = items.map((item) => Math.pow(item, 2));
// console.log(newItems);

// 2 - change array to [2,4,6]
// const newItems = items.filter((item) => item % 2 === 0);
// console.log(newItems);

// // 3 - change array to [1,2,3,4,1,1]
// const newItems = items.map((item) => {
//   if (item > 4) {
//     return 1;
//   }
//   return item;
// });
// console.log(newItems);

// // 4 - change array to [1,"hello",3,4,"hello",99]
// const newItems = items.map((item) => {
//   if (item === 2 || item === 5) {
//     return "hello";
//   }
//   if (item === 6) {
//     return 99;
//   }
//   return item;
// });
// console.log(newItems);

// // 5 - change array to [2,4,"hello"]
// const newItems = items.filter((item) => {
//   return item % 2 === 0;
// });

// const newItemsHello = newItems.map((newItem) => {
//   if (newItem === 6) {
//     return "hello";
//   }
//   return newItem;
// });
// console.log(newItemsHello);

// // 6 - change array to [1]
// const newItems = items.filter((item) => {
//   if (item === 1) {
//     return item;
//   }
// });
// console.log(newItems);

// // 7 - change array to ["bye"]
// const solution7 = intialArray; //
// console.log({ solution7 });

// const arrayOfObjects = [
//   { id: 1, text: "hello world", isCompleted: true },
//   { id: 2, text: "dont give up", isCompleted: false },
//   { id: 3, text: "keep going", isCompleted: true },
//   { id: 4, text: "you can do it", isCompleted: false },
//   { id: 5, text: "apply what you learn", isCompleted: true },
// ];

// // 8 - change all status to completed
// const solution8 = arrayOfObjects;
// console.log({ solution8 });

// // 9 - change id 4 to completed
// const solution9 = arrayOfObjects;
// console.log({ solution9 });

// // 10 - remove (filter out) all todo that is already completed
// const solution10 = arrayOfObjects;
// console.log({ solution10 });

// // 11 - change text of not completed item to "you need to pay to use this todos"
// const solution11 = arrayOfObjects;
// console.log({ solution11 });

// // 12 - add new property call "isPaid" to each of the todos with default value `false`, eg: { id: 1, text: "hello world", isCompleted: true, paid: false},
// const solution12 = arrayOfObjects;
// console.log({ solution12 });

// // 13 - add new property call "cost" (integer) with the default value, character count of the "text" field, eg: { id: 1, text: "hello world", isCompleted: true, cost: 10}, because "hello world" has 10 characters
// const solution13 = arrayOfObjects;
// console.log({ solution13 });

// // 14 - change all id from number format to string format, eg: id: 3 => id: "3"
// const solution14 = arrayOfObjects;
// console.log({ solution14 });

// // 15 - remove completed todo and reset the id to 1,2,3 ascending
// const solution15 = arrayOfObjects;
// console.log({ solution15 });
