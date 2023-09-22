
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

// // for(let i = 0; i < answer; i++){
// //     console.log(i)
// // }

// for (let i = 1; i <= answer; i++) {
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log("Fizz Buzz")
//     } else if (i % 3 === 0) {
//         console.log("Fizz");
//       } else if (i % 5 === 0){
//         console.log("Buzz");
//     } else {
//         console.log(i)
//     }
//   }

// const reverseString = function(string) {
    
// };



// const reverseString = function(string) {
//     let letter = ""

//     for (let i = 0; i < string.length + 1; i++) {
    
//         letter += (string.charAt(string.length -i))
//     }
//     return letter;
// };


// const removeArray = function(array, numRemove) {
//     array.splice(numRemove, 1)
//     return array
// };

// const removeFromArray = function(array, remove) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === remove){
//             //remove that array element
//         } else {
//             //just retain
//         }
//     }

// };


// const removeFromArray = function (array, ...args) {

//     const newArray = [];
  
//     array.forEach((item) => {
  
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
  
//     return newArray;
//   };


// const sumAll = function(first, second) {

//   let sum = 0;
//   let larger;
//   let smaller;
  
//   if (typeof(first) !== 'number') {
//       return 'ERROR'
//   } else if (typeof(second) !== 'number') {
//       return 'ERROR'
//   } else if (Math.sign(first) === -1) {
//       return 'ERROR'
//   } else if (Math.sign(second) === -1) {
//       return 'ERROR'
//   } else if (first < second) {
//       larger = second;
//       smaller = first;

//   } else {
//       larger = first;
//       smaller = second;

//   }

  
//   for (let index = larger; smaller <= index; index--) {

//       sum+= index;
//   }

//   return sum

// };


const leapYears = function(year) {

    if(year % 400 % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) {

        return true; 
    }else {
        return false
    }
    
};