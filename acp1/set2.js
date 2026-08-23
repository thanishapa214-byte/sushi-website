// function multiplicationTable(n){
//     for (let i=1;i<=10;i++){
//         console.log(`${n} x ${i} = ${n*i}`);
//     }
// }
// multiplicationTable(3);


// function reverseString(str){
//     let reversed="";
//     for(let i=str.length-1;i>=0;i--){
//         reversed+=str[i];
//     }
//     return reversed;
// }
// console.log(reverseString("javascript"));



// function isPalindrome(word){
//     let start=0;
//     let end= word.length-1;
//     while(start<end){
//         if (word[start].toLowerCase() !== word[end].toLowerCase()){
//             return"No"
//             start++;
//             end--;
//         }
//         return"yes";
//     }
// }
//     console.log(isPalindrome("racecar"));
//     console.log(isPalindrome("hello"));



// function countUppercase(str){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]>='A'&& str[i]<='Z'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countUppercase("CodeJavaScript"));


function printTriangle(n){
    for(let i=1;i<=n;i++){
        console.log("*".repeat(i));
    }
}
printTriangle(4);