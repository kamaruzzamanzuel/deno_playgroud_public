function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

greet("Alice");

const name = prompt("What is your name?");

greet(name || "World");
