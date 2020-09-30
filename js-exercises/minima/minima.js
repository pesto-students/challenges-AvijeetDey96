function minima(n , ...args) {
    let numbersArray = args[0];
    numbersArray = numbersArray.sort((a,b)=>a-b);
    return  numbersArray.splice(0,n);
}

export { minima };
