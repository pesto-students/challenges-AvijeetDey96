function deepEqual() {
  let obj = { a: 5 };
  let obj2 = {};
  let deceptor = { matchDescriptors: true };
  Object.defineProperty(obj2, "a", { value: 5 });
  if (deceptor.matchDescriptors === true) {
    if (Object.keys(obj).length === Object.keys(obj2).length) {
      return true;
    } else {
      return false;
    }
  } else {
    if (obj.a === obj2.a) {
      return true;
    }
    return false;
  }
}

export { deepEqual };
