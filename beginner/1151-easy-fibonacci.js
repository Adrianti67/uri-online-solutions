const input = require('fs').readFileSync('/dev/stdin', 'utf8');
const lines = input.split('\n');

const fib = n => {
  if (n === 1) {
    return [0, 1];
  } else {
    const s = fib(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

console.log(fib(Number(lines.shift()) - 1).join(" "));
