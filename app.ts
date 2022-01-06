class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(): string {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("Good Morning!");
console.log(greeter.greet());


class Shape {
    private length: number;
    private width: number;

    public constructor(l: number, w: number) {
        this.length = l;
        this.width = w;
    }

    public area(): number {
        return this.length * this.width;
    }
}

let square = new Shape(20, 20);
console.log(square.area());