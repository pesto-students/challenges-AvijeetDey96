function* cycle(array) {
  while (true) {
    for (const data of array) {
      yield data;
    }
  }
}

function* count(number) {
  let i = number;
  while (true) {
    yield i;
    i += 1;
  }
}

function* repeat(num, ct) {
  const number = num;
  let i = 1;
  const Max = ct;
  while (i <= Max) {
    yield number;
    i += 1;
  }
}
export {
  count,
  cycle,
  repeat
}