//Write a function that accepts an array of strings and console.logs each element
// using a for loop.
function fruits(arr){
for
(let i=0; i<arr.length;i++){
     console.log(arr[i]);
}
}
let allfruits =['kiwi','mangoes','guavas','sweetberry','orange'];
fruits(allfruits);

//Write a function that accepts an array of numbers and uses the forEach() method to 
//console.log each number multiplied by 2.
function numbers(arr){
 arr.forEach(numbers => 

       console.log(numbers*2)); 
    }

let allnumbers =[3,5,6,4,9,10]
numbers(allnumbers)

//Write a function that takes in an array of numbers and 
//consoles the first four items multiplied by 8 and the last two added by 5.
 //Console the array with the new values
     
     function multiplyArray(arrr) {
          const firstFour = arrr.slice(0, 4).map(number => number * 8);
          const lastTwo = arrr.slice(-2).map(number => number + 5);
          const multArray = [...firstFour, ...lastTwo];
          console.log(multArray);
          }
          const myArray = [30, 3, 10, 3, 7, 8];
          multiplyArray(myArray);
          
        //  Write a function that takes in the following array and
        // use a while loop to iterate and break when the item is equal to the fourth index
          //let arrNum = [1,2,3,4,5,6,7,8,9];
function whileLoopArray(arrNum) {
     let i = 0;
     while (i < arrNum.length) {
          if (i === 4) {
               break;
          }
          console.log(arrNum[i]);
          i++;
     }
}
           let arrNum = [1,2,3,4,5,6,7,8,9];
          whileLoopArray(arrNum);

//Write a function that takes in a an array of strings and
// use a continue statement when the item is at the second index
//let fruits= ['apple','plum','banana','strawberries','kiwi']

function fruitss(arr4){
     for(let i=0;i<arr4.length;i++){
     if(i===2){
     continue;
     }
     console.log(arr4[i]);
     }
     }
     let fruit= ['apple','plum','banana','strawberries','kiwi'];
     fruitss(fruit);
          
     


