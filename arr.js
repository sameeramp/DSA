// Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
 

// Example 1:

// Input: nums = [-1,1,2,3,1], target = 2
// Output: 3
let count=0
let nums = [-1,1,2,3,1]
let target = 2
nums.sort((a,b)=> a -b)
for(let i=0;i<nums.length;i++){
    for(let j=i+1;j<nums.length;j++){
let sum= nums[i]+nums[j]
     if(sum<target){
         count++
     }
    }
  
    
}



return count;