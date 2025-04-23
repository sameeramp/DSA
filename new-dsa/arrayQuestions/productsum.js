// Given an array that contains both positive and negative integers, 
// the task is to find the product of the maximum product subarray. 

// Examples:

// Input: arr[] = {6, -3, -10, 0, 2}
// Output:  180
// Explanation: The subarray is {6, -3, -10}

// Input: arr[] = {-1, -3, -10, 0, 60}
// Output:   60
// Explanation: The subarray is {60}

const arr = [6, -3, -10, 0, 2]
let prod=1;
let max=0;

for(let i=0;i<arr.length;i++){
    prod*=arr[i]

    if(prod >max){
        max=prod
    }
}
console.log(max)