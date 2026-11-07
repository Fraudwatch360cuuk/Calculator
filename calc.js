const [op, a, b] = process.argv.slice(2);
const x = Number(a);
const y = Number(b);
if (op === "sqrt") {
  if (x < 0) {
    console.log("Cannot take the square root of a negative number");
  } else {
    console.log("Square root of " + x + " = " + Math.sqrt(x));
  }
} else if (op === "add") {
  console.log(x + " + " + y + " = " + (x + y));
} else if (op === "sub") {
  console.log(x + " - " + y + " = " + (x - y));
} else if (op === "mul") {
  console.log(x + " x " + y + " = " + x * y);
} else if (op === "div") {
  if (y === 0) {
    console.log("Cannot divide by zero");
  } else {
    console.log(x + "/ " + y + " = " + x / y);
  }
} else if (op === "power") {
  console.log(x + " ^ " + y + " = " + x ** y);
} else if (op === "table") {
  for (let i = 1; i <= 12; i++) {
    console.log(x + " x " + i + " = " + x * i);
  }
} else {
  console.log(
    "Usage: node calc.js <sqrt|add|sub|mul|div|power|table> <number> [number]",
  );
}
