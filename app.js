const arr1 = [1, 2, 3, 4, 5, 6];
const arr4 = [1, 2, 3, 4, 58, 9, 0, 0, 0, 0];
const arr6 = [1, 2, 3, 4, 58, 9, 0, 0, 0, 0, 85];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [2, 3, 4, 5, 6, 7];
const arr5 = [1, 555];

let container = [arr1, arr2, arr3, arr4, arr5, arr6];
let sample = [];
let counter = 0;

for (let i = 0; i < container.length; i++) {
  for (let j = i + 1; j < container.length; j++) {
    if (container[i][0] === container[j][0]) {
      container[j].shift();
    }
  }
}

console.log(container);
