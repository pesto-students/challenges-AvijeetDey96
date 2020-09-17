function lastIndexOf(...args) {
  let index = -1;
  let list = args[1];
  let searchValue = args[0];
  let i=0;
  list.forEach(element => {if(element===searchValue) {index=i}i++;});
  return index;
  }
  export {
    lastIndexOf,
  };