// Question 5: Write a function that calculates the sum of all numbers in an array.

function calculateSum(numbers) {
  // Write code here
  let res =0
  for(i=0;i<numbers.length;i++){
 
          res=res+numbers[i]
      
  }
  return res
}

console.log(calculateSum([1, 2, 3, 4, 5])); 
// Expected Output: 15
