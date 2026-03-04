// Problem 1:

function formatValue(data: string | number | boolean) {
  if (typeof (data) === "string") {
    let conString = data.toLocaleUpperCase();
    return conString
  } else if (typeof data == "number") {
    return data * 10
  } else if (typeof data === "boolean") {
    return !data
  } else {
    return "error"
  }
}
console.log(formatValue("hello"));

// Problem 2:

function getLength(data: string | any) {
  if (Array.isArray(data)) {
    return data.length;
  } else if (typeof data === "string") {
    return data.length;
  } else {
    return "error";
  }
}
// console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

// Problem 3:

class Person {
  private name: string;
  private age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getDetails(): string {
    return (`Name: ${this.name}, Age: ${this.age}`)
  }
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

// Problem 4:

type books = {
  title: string;
  rating: number
}

function filterByRating(books: books[]) {
  const filterBooks = books.filter(book => book.rating > 4);
  return filterBooks;
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

// Problem 5:

interface book {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

function filterActiveUsers(users: book[]) {
  return (users.filter(user => user.isActive === true));
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

// Problem 6:

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable}`)
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// Problem 7:

function getUniqueValues(array1: number[], array2: number[]) {
  for (let i = 0; i < array2.length; i++)
    if (array1.indexOf(array2[i]) == -1)
      array1.push(array2[i]);

  return array1;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// Problem 8:

type products = {
  name: string,
  price: number,
  quantity: number,
  discount?: number
}

function calculateTotalPrice(products: products[]) {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    let e = products[i];
    if (e.discount) {
      total = total + ((e.price - ((e.price / 100) * e.discount)) * e.quantity)
    } else {
      total = total + (e.price * e.quantity)
    }

  }

  return total;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));



