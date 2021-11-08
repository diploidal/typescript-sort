import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Sort array of numbers
const numbersCollection = new NumbersCollection([1, -19, 4, -5, 5]);
numbersCollection.sort();
console.log(numbersCollection.data);

// Sort string characters
const charactersCollection = new CharactersCollection('Xxaydsbljiurtom');
charactersCollection.sort();
console.log(charactersCollection.data);

// Sort linked list values
const linkedList = new LinkedList();
linkedList.add(50);
linkedList.add(-5);
linkedList.add(22);
linkedList.add(10);

linkedList.sort();
linkedList.print();
