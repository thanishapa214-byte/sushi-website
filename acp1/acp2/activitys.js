// Activity 1: Simple Function
function greet() {

}
    console.log("Hello World");
    

// Activity 2: Function with Parameter
function greetUser(thanisha) {
 console.log("Hello" + thanisha);}
     greetUser("thanisha");


    // Activity 3: Addition Function
function add (a,b) {
    console.log(a + b);
}
add(10,5);



// Even or Odd Activity
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(4));
console.log(checkEvenOdd(7)); 

// Activity 6: Largest Number
function findLargest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}


console.log(findLargest(10, 5)); 
console.log(findLargest(3, 12));  
console.log(findLargest(7, 7));   


// String Length Counter Activity
function countCharacters(word) {
    let count = 0;
    
    for (let char of word) {
        count++;
    }
    
    return count;
}


console.log(countCharacters("hello"));    
console.log(countCharacters("JavaScript")); 
console.log(countCharacters(""));           


// Multiplication Table Function
function printTable(num) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}


printTable(5);

//reverse

function reverseWord(word) {
    let reversed = "";
    
    
    for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
    }
    
    return reversed;
}

console.log(reverseWord("hello"));   
console.log(reverseWord("JavaScript")); 