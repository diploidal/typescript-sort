import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 2, 1, 0 - 5, -3, -6]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
