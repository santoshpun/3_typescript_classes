//concise way to create and assign a class instance property from a constructor parameter
class Greeter {

    constructor(private greeting: string) { }

    greet(): string {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Good Morning!");
console.log(greeter.greet());


class Shape {

    public constructor(private length: number, private width: number) { }

    public area(): number {
        return this.length * this.width;
    }
}

let square = new Shape(20, 20);
console.log(square.area());