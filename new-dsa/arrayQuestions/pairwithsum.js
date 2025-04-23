// Given an array A[] of n numbers and another number x, 
// the task is to check whether or not there exist two elements in A[] 
// whose sum is exactly x. 

// Examples: 

// Input: arr[] = {0, -1, 2, -3, 1}, x= -2
// Output: Yes
// Explanation: If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}, x = 0
// Output: No

const arr = [1, -2, 1, 0, 5]
 let  x = 0

 arr.sort((a,b)=> a -b)

 let l=0;
 let r=arr.length-1
let flag=false
 while(l<r){
if(arr[l]+arr[r]>x){
r--
}else if(arr[l]+arr[r]==x){
   flag=true
   break;
}else{
    l++
}


 }
 
 console.log(flag ? "yes" : "no")
 