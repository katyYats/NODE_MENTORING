const stdin = process.stdin;

stdin.setEncoding("utf8");
stdin.resume();

stdin.on("data", (input) => {
  const result = input.trim().split("").reverse().join("");
  process.stdout.write(`${result}\n\n`);
});
