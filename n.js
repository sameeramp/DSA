// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.
// Output: 2, nums = [1,2,_]
let nums = [1,1,2]
let k=1;
for(let i=0;i<nums.length-1;i++){
    
    if(nums[i]!==nums[i+1]){
        nums[k]=nums[i+1];
         k++;
    }
       
    
}
return k;
// Given a string s, return the string after replacing every uppercase letter with the same lowercase letter.

 

// Example 1:

// Input: s = "Hello"
// Output: "hello"
let s = "Hello"
let val= s.toLowerCase();
return val; 
