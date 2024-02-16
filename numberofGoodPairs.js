// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

 

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
let nums = [1,2,3,1,1,3]
let count=0;
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
       if(nums[i]==nums[j] && i<j){
           count++;
       }
    }
}
return count;