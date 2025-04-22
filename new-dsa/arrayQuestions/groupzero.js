const arr = [2, 5, 1, 2, 0, -3, 4, -2, 2, -1, 7, 1, 2, 1, -2, -1, 3, 6];
let arr3=[]
for(let i=0;i<arr.length;i++){
   
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==0 && arr[j]!== "0" ){
            
            arr3.push([arr[i], arr[j]])
            arr[j]="0"
            
             break;
        }
    }
   
}
console.log(arr3)
