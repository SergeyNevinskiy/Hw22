function counter(num = 0) {
  const accum = num;
  return {
    increase: () => accum + 1,
    decrease: () => accum - 1,
    value: () => accum,
  };
}
const result = counter(16);
console.log(result.increase());
console.log(result.decrease());
console.log(result.value());
