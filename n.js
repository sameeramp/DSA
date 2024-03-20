// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

// Return the sum of all the unique elements of nums.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 4
// Explanation: The unique elements are [1,3], and the sum is 4.
let nums = [1,2,3,2]
let sum=0;
for(let i=0;i<nums.length;i++){
    let count=1;
    if(nums[i]!=='-1'){
    for(let j=i+1;j<nums.length;j++){
        if(nums[i]==nums[j]){
            count++;
            nums[j]='-1';
        }
    }
    if(count==1){
        sum+=nums[i];
    }
    }
}
return sum;