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
