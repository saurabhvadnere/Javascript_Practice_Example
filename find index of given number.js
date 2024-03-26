function findtarget (array , target){
    for(i = 0; i<array.length; i++){
        if(array[i]===target){
            return i;
        }
    }
    return "Number not found"; //'The target is not found'
}
const myArray = [1,3,8,90,112,150,248,556,850,-1,1200];

let guess = -1//+prompt("enter the target")     // Prompt not work in VS code.

const ans = findtarget(myArray,guess);
console.log('The target of index is:',ans);
