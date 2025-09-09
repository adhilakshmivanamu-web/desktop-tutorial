var app='casio';
console.log("app) is",app);
function calculator(operation, a, b)
{
    switch(operation)
    {
        case 'add':
            return a+b;
        case 'subtract':
            return a-b;
        case 'multiply':
            return a*b;
        case 'divide':
            return a/b;
        default:
            return "Invalid operation";
    }
}
console.log("Addition:", calculator('add', 5, 3)); // 8
console.log("Subtraction:", calculator('subtract', 5, 3));
console.log("Multiplication:", calculator('multiply', 5, 3)); // 15
console.log("Division:", calculator('divide', 6, 3)); // 2
console.log("Invalid Operation:", calculator('modulus', 5, 3)); // Invalid operation