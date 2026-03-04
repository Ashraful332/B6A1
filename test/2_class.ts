
// 1
export class Person {
    private name : string;

    public constructor(name:string){
        this.name = name;
    }

    public getName(): string{
        return this.name;
    }
}

const person = new Person("ashraful");
console.log(person.getName());

export class Email {
    private mail : string;

    public constructor(mail:string){
        this.mail = mail;
    }

    public getMail(): string{
        return (`Name: ${this.mail}`)
    }
}

const email = new Email("ashrafulpathan@yahoo.com");
console.log(email.getMail());


export class Bio {
    private name :string;
    private age : number;

    public constructor(name:string,age:number){
        this.name = name;
        this.age = age
    }

    public getBio():string{
        return (`Name: ${this.name}, Age: ${this.age}`)
    }
}
const bio = new Bio("ashraful",18);
console.log(bio.getBio());
