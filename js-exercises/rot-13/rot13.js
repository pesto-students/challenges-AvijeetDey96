function rot13(...args) {
  let dataString = args[0].toUpperCase()
  let arr =[];
  let str =''
for (let i = 0; i < dataString.length; i++) {

   let value = dataString.charCodeAt(i) === 32 ? dataString.charCodeAt(i) : dataString.charCodeAt(i)+13

   if(value>= 65 && value<= 90 ){
    arr.push(String.fromCharCode(Number(value)))

   }
if(value > 90 ){
 let  tempValue = (value-90)
 value = 65+(tempValue-1);
     arr.push(String.fromCharCode(Number(value)))

}
 if(value ==  32 ){
   arr.push(String.fromCharCode(Number(value)))
}
str  = arr.join('') ;
   }
 

  return str;
}


export {
  rot13,
};
