// Largest Sum Contiguous Subarray (Kadane’s Algorithm)

// Given an array arr[] of size N. 
// The task is to find the sum of 
// the contiguous subarray within a arr[] with the largest sum. 

// Example:

// Input: arr = {-2,-3,4,-1,-2,1,5,-3}
// Output: 7
// Explanation: The subarray {4,-1, -2, 1, 5} has the largest sum 7.

// Input: arr = {2}
// Output: 2
// Explanation: The subarray {2} has the largest sum 2.

// Input: arr = {5,4,1,7,8}
// Output: 25
// Explanation: The subarray {5,4,1,7,8} has the largest sum 25.

const arr = [5,4,1,7,8]

let max=arr[0];
let sum= arr[0];

for(let i=1;i<arr.length;i++){
    sum=Math.max(arr[i], max+arr[i])
    max=Math.max(sum,max)
}
console.log(max)