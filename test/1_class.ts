
// 11
export class Person{
    getName(): any {
        throw new Error("Method not implemented.");
    }
    name :string | undefined;
}
const person = new Person();
person.name = "ashraful";


console.log(person);
console.log(person.name);


// 2
class Email{
    email:string | undefined
}
const email = new Email()
email.email = "ashrafulpahtan@yahoo.com"

console.log(email.email);

