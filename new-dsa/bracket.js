function bracket(no){
   const openbraces= '{'.repeat(no)
   const closebraces  ='}'.repeat(no)
   return `${openbraces}${no}${closebraces}`
}
const value = bracket(1)
console.log(value)

function bracket(n){
let open =''
let close =''

for(let i=0;i<n;i++){
    open+='{',
    close+='}'
}
return `${open}${n}${close}`
}
const value1 = bracket(0)
console.log(value1)

