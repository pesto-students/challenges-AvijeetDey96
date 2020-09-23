function diffArray(...args) {
  const arrayOne = args[0];
  const arrayTwo = args[1];
  
  if(JSON.stringify(arrayOne)===JSON.stringify(arrayTwo)){
    return []
  }
  else{
    let arrayThree = [];
    const result = new Map();
 
      for (let ele of arrayOne){
        if(!result.has(ele)){
          result.set(ele,1) 
        }
      }
      for (let element of arrayTwo){
        let count =1;
        if(result.has(element)){
          result.set(element,count+1)
        }
        else{
          result.set(element,1);
        }
      }
         
      let finalData  = getByValue(result,1)
      
      arrayThree.push(finalData)

      return arrayThree 
     }
  function getByValue(map, searchValue) {
    for (let [key, value] of map.entries()) {
      if (value === searchValue)
        return key;
    }
  }
}


export {
  diffArray,
};
