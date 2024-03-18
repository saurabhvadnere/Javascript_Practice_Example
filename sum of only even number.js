// find the sum of only even number 
function sum (array){
    let total = 0;
      for(i=0; i<array.length; i++){
        if (array[i]%2===0){
          total = total + array[i];
        }
      }
      return total;
  }
  let number = [1,2,3,4,5,6,7,8,9];
  const result = sum(number);
  console.log(result)