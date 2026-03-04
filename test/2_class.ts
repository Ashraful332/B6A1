
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
        return this.mail
    }
}

const email = new Email("ashrafulpathan@yahoo.com");
console.log(email.getMail());
