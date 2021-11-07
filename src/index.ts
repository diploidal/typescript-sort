// const bubbleSortArr = [0, 10, -1, 5];

// const bubbleSortFn = (array: number[]) => {
//   for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
//   }
// };

// bubbleSortFn(bubbleSortArr);

class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];
          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
