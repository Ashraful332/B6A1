// Problem 1:
function formatValue(data) {
    if (typeof (data) === "string") {
        var conString = data.toLocaleUpperCase();
        return conString;
    }
    else if (typeof data == "number") {
        return data * 10;
    }
    else if (typeof data === "boolean") {
        return !data;
    }
    else {
        return "error";
    }
}
console.log(formatValue("hello"));
// Problem 2:
function getLength(data) {
    if (Array.isArray(data)) {
        return data.length;
    }
    else if (typeof data === "string") {
        return data.length;
    }
    else {
        return "error";
    }
}
// console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
// Problem 3:
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.getDetails = function () {
        return ("Name: ".concat(this.name, ", Age: ").concat(this.age));
    };
    return Person;
}());
var person1 = new Person('John Doe', 30);
console.log(person1.getDetails());
var person2 = new Person('Alice', 25);
console.log(person2.getDetails());
function filterByRating(books) {
    var filterBooks = books.filter(function (book) { return book.rating > 4; });
    return filterBooks;
}
var books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];
console.log(filterByRating(books));
function filterActiveUsers(users) {
    return (users.filter(function (user) { return user.isActive === true; }));
}
var users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
console.log(filterActiveUsers(users));
function printBookDetails(book) {
    console.log("Title: ".concat(book.title, ", Author: ").concat(book.author, ", Published: ").concat(book.publishedYear, ", Available: ").concat(book.isAvailable));
}
var myBook = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};
printBookDetails(myBook);
// Problem 7:
function getUniqueValues(array1, array2) {
    for (var i = 0; i < array2.length; i++)
        if (array1.indexOf(array2[i]) == -1)
            array1.push(array2[i]);
    return array1;
}
var array1 = [1, 2, 3, 4, 5];
var array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
function calculateTotalPrice(products) {
    var total = 0;
    for (var i = 0; i < products.length; i++) {
        var e = products[i];
        if (e.discount) {
            total = total + ((e.price - ((e.price / 100) * e.discount)) * e.quantity);
            // total = total + ((e.price - (e.price * ( e.discount/100))) * e.quantity)
        }
        else {
            total = total + (e.price * e.quantity);
        }
    }
    return total;
}
var products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
console.log(calculateTotalPrice(products));
