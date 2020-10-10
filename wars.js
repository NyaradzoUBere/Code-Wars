// 08.25.2020: Get the mean of an array 8ku

// function getAverage(marks){
//     //TODO : calculate the downwar rounded average of the marks array
//     let total = 0
//     for (let i = 0; i < marks.length; i++) {
//       total += marks[i]
//     }
//     let avg = Math.floor(total / marks.length)
//     return avg
//   }

// 08.25.2020: Capitalization and Mutability 8ku
// function capitalizeWord(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }

// 08.25.2020: Area or Perimeter 8ku
// const areaOrPerimeter = function(l , w) {
//     // Return your answer
//     return (l == w) ? l * w : 2*(l + w)
//   };

// 08.25.2020: Keep Hydrated 8ku
// function litres(time) {
//     return Math.floor(time / 2)
//   }

// LeetCode Easy

// heights = [1,1,4,2,1,3]
// var heightChecker = function(heights) {
//     new_heights = []
// };

// function fizzBuzz(n) {
//     for (let i = 1; i < n + 1; i++) {
//         if (i % 15 == 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3 == 0){
//             console.log("Fizz")
//         } else if ( i % 5 == 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }

// }

// fizzbuzz(40)



//HACKERRANK: Finding Sock Pairs
// function sockMerchant(n, ar) {
//    let sorted = ar.sort()
//    let pairs = 0

//    for (let i = 0; i < n; i++) {
//        if (sorted[i] == sorted[i+1]) {
//            pairs = pairs + 1
//            i += 1
//        }
//    }
//    return pairs
// }

// sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20])

// // DistinctPairs
// function numberOfPairs(target, array) {
//     const sortedArray = array.sort()
//     const newArray = []
//     for (let i = 0; i < sortedArray.length; i++) {
//         for (let n = 1; n < sortedArray.length; n++) {
//             sortedArray[i] + sortedArray[n] == target ? newArray.push(`${sortedArray[i]}${sortedArray[n]}`) : false
//         }
//     }
//     pairs = 0
//     for (let i = 0; i < newArray.length; i++) {
//         newArray[i] = newArray[i + 1] ? pairs = pairs + 1 : pairs = pairs + 0
//         i++
//     }
//     return pairs
// }

// numberOfPairs(10, [1, 2, 3, 6, 7, 8, 9, 1])

// K-SubSequences
// function ksub (k, array) {

// }

// ksub(5, [5, 10, 11, 9, 5])

// SOLVED: FIND THE NUMBER
// function findNumber(arr, k) {
//     // Write your code here
//     arr.includes(k) ? console.log("yes") : console.log("no")
// }

// findNumber([1, 2, 3, 4, 5], 3)

// function oddNumbers(l, r) {
    // // Write your code here
    // let array = []
    // const beginning = l
    // const ending = r
    // for (let i = l; i < r; i++) {
    //     array.push(i)
    //     i++
    // }
    // r % 2 == 1 ? array.push(r) : null
    // console.log(array)

//     let array = []
//     let i = l
//     while (i <= r && i >= l) {
//         array.push(i)
//         i++
//     }
//     console.log(array)
//     let oddsArray = []
//     array.forEach(number => {
//         number % 2 === 1 ? oddsArray.push(number) : null
//     })
//     return oddsArray
// }


// oddNumbers(2, 15)


// function setUnique(array) {
//     // const newArray = array.sort()
//     let newArray = []
    // const counter = array.filter(item => item == array[0]).length
    // array.forEach(item => {
        
    // })
    // for (let i = 0; i<array.length; i++) {
    //     newArray.includes(array[i]) ? newArray.push(array[i] + 1) : newArray.push(array[i])
    // }
//     for(const element of array) {
//         newArray.includes(element) ? newArray.push(element + 1) : newArray.push(element)
//     }
//     console.log(newArray)


// }

// setUnique(["apple", "banana", "remote", "apple", "remote", "banana", "apple"])
// setUnique(["apple", "banana", "remote", "apple1", "remote2", "banana3"])

// function lengthOfLongestSubstring(s) {
//     let newArray = []
//     stringArray = s.split("")
//     count= 0
    
//     for (let i = 0; i < stringArray.length; i++) {
//         if (newArray.includes(stringArray[i])) {
//             if (newArray[newArray.length - 1] === stringArray[i]) {

//             }
//         }
        
//     }
// }

// lengthOfLongestSubstring("abcabcbb")

// function vanity(codes, numbers) {
//     let numberPairs = {
//         "A": 2,
//         "B": 2,
//         "C": 2,
//         "D": 3,
//         "E": 3,
//         "F": 3,
//         "G": 4,
//         "H": 4,
//         "I": 4,
//         "J": 5,
//         "K": 5,
//         "L": 5,
//         "M": 6,
//         "N": 6,
//         "O": 6,
//         "P": 7,
//         "Q": 7,
//         "R": 7,
//         "S": 7,
//         "T": 8,
//         "U": 8,
//         "V": 8,
//         "W": 9,
//         "X": 9,
//         "Y": 9,
//         "Z": 9
//     }

//     let splitCode = codes.toString().split("")
//     let numberArray = []
    
//     for(let i = 0; i < splitCode.length; i++) {
//         numberArray.push((numberPairs[`${splitCode[i]}`]))
//         return numberArray
//     }
//     let arrayToString = (numberArray.join(''))
//     let numbersAsString = numbers.toString()
//     // if (numbersAsString.includes(arrayToString)) {
//     //     console.log(+numbersAsString)
//     // }

//     numbersAsString.includes(arrayToString) ? console.log(+numbersAsString) : null
// }
// let numbers = [+17474824380, +14157088956]
// vanity("TWLO", numbers)

// function segments(message) {
//     let messageArray = message.split("")
//     let characters = messageArray.length
//     let newFirstMessage = []
//     let newSecondMessage = []
//     let newThirdMessage = []
//     let newFourthMessage = []
//     if (messageArray.length > 640) {
//         let codeParts = 4
//         newFirstMessage = (messageArray.splice(0, 160))
//         newSecondMessage = (messageArray.splice(161, 320))
//         newThirdMessage = (messageArray.splice(321, 480))
//         newFourthMessage = (messageArray.splice(321, 480))
//         console.log(`1/${codeParts} ${newFirstMessage.join("")}`)
//         console.log(`2/${codeParts} ${newSecondMessage.join("")}`)
//         console.log(`3/${codeParts} ${newThirdMessage.join("")}`)
//         console.log(`4/${codeParts} ${newFourthMessage.join("")}`)
//     } else if (messageArray.length > 480) {
//         let codeParts = 3
//         newFirstMessage = (messageArray.splice(0, 160))
//         newSecondMessage = (messageArray.splice(161, 320))
//         newThirdMessage = (messageArray.splice(321, 480))
//         console.log(`1/${codeParts} ${newFirstMessage.join("")}`)
//         console.log(`2/${codeParts} ${newSecondMessage.join("")}`)
//         console.log(`3/${codeParts} ${newThirdMessage.join("")}`)
//     } else if (messageArray.length > 320) {
//         let codeParts = 2
//         newFirstMessage = (messageArray.splice(0, 160))
//         newSecondMessage = (messageArray.splice(161, 320))
//         console.log(`1/${codeParts} ${newFirstMessage.join("")}`)
//         console.log(`2/${codeParts} ${newSecondMessage.join("")}`)
//     } else if (messageArray.length > 160) {
//         let codeParts = 1
//         newFirstMessage = (messageArray.splice(0, 160))
//         console.log(`1/${codeParts} ${newFirstMessage.join("")}`)
//     }
// }

// segments("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")

// SOLVED: Checking if number 1-100 is a prime number
// function isPrime(numArray) {
//     // let squareRoot = Math.floor(Math.sqrt(n))
//     let array = []

//     array = numArray.filter((number) => {
//         for (let i = 2; i <= Math.floor(Math.sqrt(number)); i++) {
//             if (number % i === 0) {
//                 return false;
//             }
//         }
//         return true
//     })
//     console.log(array)
// }

// isPrime([2, 3, 4, 5, 6, 7, 8, 9, 10])


// def kids_with_candies(candies, extra_candies)
//     candies.map do |candy|
//         if candy + extra_candies >= candies.max
//             true
//         else
//             false
//         end
//     end
// end

// SOLVED: Kids With the Greatest Number of Candies
// function kidsWithCandies(candies, extraCandies) {
//     let max = Math.max.apply(Math, candies)
//     let array = []
//     for (let i = 0; i < candies.length; i++) {
//         if (candies[i] === max) {
//             array.push(true)
//         } else {
//             (candies[i] + extraCandies >= max ? array.push(true) : array.push(false))
//         }
//     }
//     console.log(array)
// };

// // SOLUTION 2

// function kidsWithCandies(candies, extraCandies) {
//     candies.map((v) => (v + extraCandies) >= Math.max(...candies))
// };


// kidsWithCandies([12,1,12], 10)

// SOLVED: Shuffle the Array
// function shuffle(nums, n) {
//     let newArray = []
//     for (let i = 0; i < n; i++) {
//         if (i <= n) {
//             newArray.push(nums[i])
//             newArray.push(nums[i + n])
//         }
//     }
//     console.log(newArray)
// };

// shuffle([1,2,3,4,4,3,2,1], 4)

// SOLVED: Subtract the Product and Sum of Digits of an Integer

// function subtractProductAndSum(n) {
//     let nArray = n.toString().split("")
//     let multiply = 1
//     let sum = 0
//     for (let i = 0; i < nArray.length; i++){
//         multiply *= parseInt(nArray[i])
//     }
//     for (let i = 0; i < nArray.length; i++){
//         sum += parseInt(nArray[i])
//     }
//     return (multiply - sum)
// }

// subtractProductAndSum(4421)

// SOLVED Split a String in Balanced Strings

// function balancedStringSplit(string) {
//     let stringArray = string.split("")
//     let rCount = 0
//     let lCount = 0
//     let pairs = 0
//     for (let i = 0; i < stringArray.length; i++){
//     stringArray[i] === "R" ? rCount += 1 : lCount += 1
//     rCount == lCount ? pairs += 1 : null
// }
// return(pairs)
// }

// balancedStringSplit("RLLLLRRRLR")

// UNSOLVED: Shuffle Array

// function restoreString(s, indices) {
//     let separateString = s.split("")
//     let newStringArray = []
//     console.log(separateString)
//     for (let i = 0; i < indices.length; i++){
//         newStringArray.push(separateString[indices[i]])
//     }
//     console.log(newStringArray)
// }

// restoreString("codeleet", [4,5,6,7,0,2,1,3])

// SOLVED: Given a set of consecutive integers in an array, how can you determine if a number is missing and which one is missing. Ex: (31, 32, 33, 35, 36)

// function missingNumber(array) {
//     let missingNumber = []
//     for (let i = 0; i < array.length; i++) {
//         array[i] === array[i + 1] - 1 ? null : missingNumber.push(array[i] + 1)
//     }
//     missingNumber.pop()
//     console.log(missingNumber)
// }

// missingNumber([5, 6, 8, 9])

// SOLVED: Number of Steps to Reduce a Number to Zero

// function numberOfSteps(num) {
//     let steps = 0
//     while (num > 0) {
//         // num % 2 === 0 ? (num = num / 2, steps += 1) : (num = num - 1, steps += 1)
//         if (num % 2 === 0) {
//             num = num / 2
//             steps += 1
//         } else {
//             num = num - 1
//             steps += 1
//         }
//     }
//     return steps
// }

// numberOfSteps(123)

// SOLVED: Defanging an IP Address  

// function defangIPaddr(address) {
//     let addressArray = address.split(".")
//     let newArray = []
//     for (let i = 0; i < addressArray.length; i++) {
//         newArray.push(addressArray[i])
//         newArray.push("[.]")
//     }
//     newArray.pop()
//     console.log(newArray.join(""))
// }

// defangIPaddr("255.100.50.0")

// SOLVED: Remove the first occurrence of a given 'search string' from a string
// function removeFirstN(string, n) {
//     let stringArray = string.split(" ")
    // let newStringArray = []
    // let discardedString = []
    // newStringArray.push(stringArray[0])
    // for (let i = 1; i < stringArray.length; i++) {
    //     if (stringArray[i] == n) {
    //         discardedString[0] ? newStringArray.push(stringArray[i]) : discardedString.push(stringArray[i])
    //     } else {
    //         newStringArray.push(stringArray[i])
    //     }
    // }
    // console.log(newStringArray.join(" "))

    // Solution 2
    // let index = string.indexOf(n)
    // const firstHalf = string.slice(0, index - 1)
    // const secondHalf = string.slice(index + n.length)
    // console.log(firstHalf + secondHalf)
// }
// removeFirstN("The quick brown fox jumps over the lazy dog", "the")

// function fib(1) {
//     array.push
// }

// SOLVED: Fibonnaci Number
// function fib(n) {
//     if(n == 0) {
//         return 0
//     } else if (n == 1) {
//         return 1
//     } else {
//         return fib(n-1)+fib(n-2)
//     }
// }

// fib(4)

// UNSOLVED: Design Parking System
// function ParkingSystem(big, medium, small) {

// }

// ParkingSystem(["ParkingSystem", "addCar", "addCar", "addCar", "addCar"]
// [[1, 1, 0], [1], [2], [3], [1]])

//SOLVED: Remove all even integers from an array
// function onlyOdds(array) {

    // SOLUTION 1
    // let oddsArray = []
    // for (let i = 0; i < array.length; i++) {
    //     if (array[i] % 2 !== 0) {
    //         oddsArray.push(array[i])
    //     }
    // }
    // console.log(oddsArray)

    // SOLUTION 2
    // array = array.filter(number => number % 2 !== 0)
    // console.log(array)
// }
// onlyOdds([1,2,4,5,10,6,3])

// SOLVED: Palindrome

// function reversable(string) {
//     let stringArray = string.split("")
//     let reverse = []
//     while (stringArray.length) {
//         reverse.push(stringArray.pop())
//     }
//     reverse.join("") == string ? console.log("true") : console.log("false")
// }

// reversable("john")

// SOLVED: fizzBuzz

// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log("fizzbuzz")
//         } else if (i % 5 === 0) {
//             console.log("buzz")
//         } else if (i % 3 === 0) {
//             console.log("fizz")
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(15)

// SOLVED: Anagram

// function anagram(string1, string2) {
//     let first = string1.toLowerCase()
//     let second = string2.toLowerCase()
//     let firstSortedArray = first.split("").sort()
//     let secondSortedArray = second.split("").sort()
//     firstSortedArray.join("") == secondSortedArray.join("") ? console.log("true") : console.log("false")
// }
// anagram("finder", "bye")

// SOLVED: Find the Vowels

// function vowels(string) {
//     const stringArray = string.split("")
//     const vowels = ["a", "e", "i", "o", "u"]
//     let count = 0
//     for (let x = 0; x < stringArray.length; x++) {
//         vowels.includes(stringArray[x])? count++ : null
//     }
//     console.log(count)
// }

// vowels("beautiful")

// Fibonacci

// function fibonacci(n) {
//     let fibonacciN = 0
//     if (n === 0) {
//         console.log(0)
//     } else if (n === 1) {
//         console.log(1)
//     } else {
//         fibonacciN = fibonacci(n - 1) + fibonacci(n - 2)
//     }
// }

// fibonacci(n)

//SOLVED: Maximum 69 Number
// function maximum69Number(number) {
//     const numberArray = number.toString().split("")
//     let newArray = []
//     let sixArray = []
//     for (let i = 0; i < numberArray.length; i++) {
//         if (numberArray[i] === "9") {
//             newArray.push(numberArray[i])
//         } else {
//             if (sixArray[0]) {
//                 newArray.push(numberArray[i])
//             } else {
//                 (newArray.push("9"), sixArray.push(numberArray[i]))
//             }
//         }
//     }
//     return parseInt(newArray.join(""))
// }

// maximum69Number(9996)

// MAYBE
// function setUnique(array) {
//     let returnArray = []

//     for (const element of array) {
//         returnArray = unique(returnArray, element)
//     }
//     return returnArray
// }

// const unique = (returnArray, element, i = 1) => {
//     if (returnArray.includes(element)) {
//         if(returnArray.includes(element + 1)) {
//             unique(returnArray, element, i + 1)
//         } else {
//             returnArray.push(element + i)
//         }
//     } else {
//         returnArray.push(element)
//     }
//     return returnArray
// }

// console.log(setUnique(["apple", "banana", "apple", "banana"]))

// SOLVED: List out transactions uniquely
function setUnique(array) {
    let sortedArray = array.sort()
    let transactions = {}
    for (let i = 0; i < sortedArray.length; i++) {
        transactions[sortedArray[i]] = (transactions[sortedArray[i]] || 0) + 1
    }
    return transactions
}

console.log(setUnique(["banana", "pear", "apple", "banana", "pear"]))