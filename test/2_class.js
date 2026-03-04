"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = exports.Person = void 0;
// 1
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("ashraful");
console.log(person.getName());
var Email = /** @class */ (function () {
    function Email(mail) {
        this.mail = mail;
    }
    Email.prototype.getMail = function () {
        return this.mail;
    };
    return Email;
}());
exports.Email = Email;
var email = new Email("ashrafulpathan@yahoo.com");
console.log(email.getMail());
