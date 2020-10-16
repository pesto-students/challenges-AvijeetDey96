const allSettled = async (arr) => {
  if (!arr || !Array.isArray(arr)) {
    throw TypeError(`you provided ${typeof arr},it should be an array`);
  }

  const output = [];
  for (const promise of arr) {
    let result = null;
    try {
      // eslint-disable-next-line no-await-in-loop
      result = { value: await promise, status: 'fulfilled' };
    } catch (rejected) {
      result = { Error: rejected, status: 'rejected' };
    }
    output.push(result);
  }

  return new Promise((resolve) => {
    resolve(output);
  });
};

export { allSettled };
