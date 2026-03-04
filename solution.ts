// Problem 1:

function formatValue(data:string | number | boolean) {
  if (typeof (data) === "string") {
    let conString = data.toLocaleUpperCase();
    return conString
  }else if (typeof data == "number") {
    return data*10
  }else if (typeof data === "boolean") {
    return !data
  }else {
    return "error"
  }
}
console.log(formatValue("hello"));

// Problem 2:

function getLength(data:string | any) {
  if (Array.isArray(data)) {
    return data.length;
  }else if (typeof data === "string") {
    return data.length;
  }else{
    return "error";
  }
}
// console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

// Problem 3:

class Person {
  private name : string;
  private age : number;

  public constructor(name:string,age:number){
    this.name = name;
    this.age = age;
  }

  public getDetails():string {
    return(`Name: ${this.name}, Age: ${this.age}`)
  }
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());

// Problem 4:

type books = {
  title : string;
  rating: number
}

function filterByRating(books:books[]) {
  
}
const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));