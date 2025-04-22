// Input : n = 5 and array[] = {1, 2, 3, 4 ,3}
// Output: 3
const arr=[1, 2, 3, 12 ,3]
const n=5
let count=0
// for(let i=0;i<n;i++){
//     for(let j=i+1;j<n;j++){
//         if(arr[i]==arr[j]){
//             count++
//         }
//     }
  
// }
let obj={}
for(let i=0;i<n;i++){
if(obj[arr[i]]){
    obj[arr[i]]++
}else{
    obj[arr[i]]=1;
}
}

for(const key in obj){
   
    if(obj[key]>1){
        count++
    }
}


console.log(count) 