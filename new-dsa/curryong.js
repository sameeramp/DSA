const findSum = (no1) => {
    const innerSum = (no2) => {
        if (!no2) return no1;
        else return findSum(no1 + no2);
    };
 return innerSum;
};

// const result = findSum(1)(12)(3);
const result = findSum(1)
const result1 = result(12)
const result3=result1(3)
console.log(result3(), 'result');

// const a={
//     name:"hi"
// }
// const b= {
//     name:"hi"
// }
// console.log(`${a}` === `${b}`, "abbb")

// function abc(no) {
//     const callback = () => console.log(no, "Opened");
//     return callback;
// }
// ;
// const response = abc(1)
// response()
