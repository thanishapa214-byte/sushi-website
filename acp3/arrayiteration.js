// array for of
//syntax
//for(let value of array){
//}
//example
// const numbers=[10,20,30,40];
// for(let num of numbers){
//     console.log(num);
// } 





//array for in
//syntax
//for(let index in array){}
//example
// const numbers=[10,20,30,40];
// for(let index in numbers){
//     console.log(index);
// }




//array for each()
// const fruits=['apple','banana','cherry'];
// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });




//array Map()
// const numbers=[1,2,3,4];
// const doubled=numbers.map(num=>num*2);
//  console.log(doubled);
// console.log(numbers);




//flatmap()
// let numbers=[1,2,3];
// let result=numbers.flatMap(function(num){
// return [num, num*2];
// });
// console.log(result);



//arrayfilter()
//filter number greater than 10
let numbers=[1,3,5,7];
let result=numbers.filter(function(num){
return num % 2 == 0;
});
console.log(result);



// array reduce()
// use to find product and total
// sum:
//  let numbers=[10,20,30,40]
//  let sum =numbers.reduce(function(sum,num){
//    return sum +num; 
// });
//  console.log(sum);




//array reduce right()
// let numbers=[1,2,3,4];
// let result=numbers.reduceRight((total,num)=>total+num,0);
// console.log(result);



//array every()
//checks if all numbers are positive
// let numbers=[10,20,,30,40];
// let result=numbers.every(num=>num>0);
// console.log(result);


//example
// let fruits=["apple","mango","watermelon","bannana"];
//     function toUpper(v,i,arr){
//     return v.toUppercase();
//     }
//     let fruitesUpper=fruits.map(toUpper);
//     console.log(fruitesUpper);

    // let numbers=[1,2,3,4,5,6,7,8,9];
    // function toDouble(v){
    //     return v*2;
    // }
    // let doubleNumbers=numbers.map(toDouble);
    // console.log(doubleNumbers);



    // let numbers=[10,20,30,40];
    // let result=numbers.reduce(function(sum,num){
    //     return sum*num;
    // })
    // console.log(result);


