// Question 7: Write a function named sumPostitveArray which accepts a parameter
//If the array contains any negative numbers, return the sum of all positive numbers only.

// Write function here
function sumPositiveArray (num) {
    let res = 0;
    for(i=0;i<num.length;i++){
        if (num[i]>0) {
          res=res+num[i]
        }
       
    }
    return res;
}
//for testing the output
console.log(sumPositiveArray([1, -2, 3, 4, -5])); 
// Expected Output: 8 (1 + 3 + 4)
console.log(sumPositiveArray([-1, -2, -3, -4])); 
// Expected Output: 0
