// Exercise 1

// const fruits = ["mango", "lemon", "blueberry"]

// console.log(fruits)
// console.table(fruits)

// Exercise 2

// const ingredients = ["eggs", "milk", "butter"]
// console.log(ingredients[1])
// console.log(ingredients.indexOf("butter"))


// Exercise 3

// const objects = ["pen", "book", "lamp"]

// objects.unshift("chair")
// console.log(objects)

// objects.pop()
// console.log(objects)

// objects.push("laptop")
// console.log(objects)

// objects.shift()
// console.log(objects)


// Exercise 4

// const numbers = [4, 10, 8, 12, 6]

// numbers.reverse()
// console.log(numbers)


// Exercise 5

// let total = 0
// const limit = 10

// for( i = 1; i <= 10; i++){
//   total += i
// }
// console.log(total)


// Exercise 6

// const sentence = "Hello Konexio !"
// // console.log(sentence.length)
// let sentenceReversed = []

// for(let i = sentence.length; i >= 0; i--){
//   sentenceReversed.push(sentence[i])
//   // console.log(sentence[i])
// }
// console.log(sentenceReversed.join(""))


// Exercise 7

// for ( let i = 0; i <= 100; i++){

//   if (i % 3 == 0 && i % 5 == 0){
//     console.log("fizzbuzz")
//   }else if(i % 3 == 0){
//     console.log("fizz")
//   }else if (i % 5 == 0){
//     console.log("buzz")
//   }else if (i % 7 == 0){
//     continue
//   } else{
//     console.log(i)
//   }
// }


// Exercise 8

// let total = 0
// const limit = 10
// let i = 1

// while (limit >= i){
//   total += i;
//   i++;
// }

// console.log(total)


// Exercise 9

// let names = ["Dushen", "Florent", "Rayan", "Lynda", "Thomas", "Florez", "Mago", "Aurelien", "Wade", "Arthur", "Jad", "Clara", "Emad", "Edaly", "Julien", "Walid1", "Walid2", "Cinnie", "Danh", "Lucas"]

// const min = 0
// const max = names.length

// const random = Math.floor(Math.random() * max) + min

// console.log(names[random])


// Exercise 10

// let arr = []

// const min = 0
// const max = 100

// for(let i = 0; i < 20; i++){
//   const random = Math.floor(Math.random() * max) + min
//   arr.push(random)
// }
// console.log(arr)

// let largestNumber = 0

// for(let j = 0; j <= arr.length; j++){
//   if (largestNumber < arr[j]){
//     largestNumber = arr[j]
//   }
// }
// console.log(largestNumber)