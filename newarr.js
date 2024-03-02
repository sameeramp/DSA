// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
let nums = [1,2,3,1]
for (let i = 0; i < nums.length; i++) {
    let count = 1;
    if (nums[i] !== '-1') {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++;
                nums[j] = '-1';
            }
        }

        if (count > 1) {
            return true;
            break;
            
        }
     
    }
}
return false;