
/***Mohamed Second Try */
// Example
/* 
Write a function called sumZero which accepts a stored array of integeres . the function sholud find the first pair where the sum is 0
.returnan array that includes both values that sum zero or undefind if a pair dose not exist 
*/
/*
Algorithm

1- create function thats accept on array as arguments 
2- check if the array is numbers 
3- if is not console the array u used is not have any numbers and return false
4- check if the array is from integres only 
5- if not console.log we will make your array be integers and convert the numbers who not integres  into integres
6- create pointer in the begining of the array 
7- create pointer in the last of the array 
8- loop (but by what condition ! and which loop is perfect)
9- cheack if the pointers sum is equal zero 
10 - if yes return the 2 pointers values in array 
11 - if is not return undefined 
*/
const SumZero = Arr => {
    let pointer = 0, Sum, SloutionArray = [], PointerOfFor = 0;

    console.log("before Delete ", Arr);
    while (pointer < Arr.length) {
        PointerOfFor = 0;
        for (const element of Arr) {
            if (Arr[pointer] === element) continue;
            Sum = Arr[pointer] + element;
            if (Sum === 0) {
                SloutionArray.push([Arr[pointer], element])
                Arr.splice(pointer, 1);
                Arr.splice(PointerOfFor, 1);
            }
            PointerOfFor++;
        }
        pointer++;

    }
    if (SloutionArray === []) {
        return undefined;
    }
    console.log("after delete", Arr);
    return SloutionArray;
}

console.log(SumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(SumZero([-2, 0, 1, 3])); // undefined
console.log(SumZero([1, 2, 3])); // undefned
console.log(SumZero([4, 5, 7, 9, -9, 20]));
console.log(SumZero([4, -4, 5, 7, 9, -9, 20]));

//the course code in not good to work with case like that [4,-4,5,7,9,-9,20]


/******Second Example  **********/

/* 
count Unique Values 
example 
implement a function called countUniqueValues which accept a stored array , and counts the unique values in the array .
there can be nagative numbers in the array , but it will always be stored 
/******expected output*******/ 
/*
[1,1,1,1,2] // 2
[1,2,3,4,4,4,7,7,12,12,13] // 7
[] //0
[-2 , -1 , -1 ,0 ,1 ] // 4
*/
// mohamed first Try
const CountUniqueValues = arr =>{
    //if the arr lenght is 0 return 0 
   if( arr.length === 0) return 0 ;   
   // create pointer1 and pointer2 and counter 
   //put the pointer1 in the first of the array and pointer2 after pointer1 by one step and the counter by 0 
   let pointer1 = 0 , pointer2 = 1 , counter = 0 , i =0; 
   //loop over the arr and the condition is i < arr.length 
   while(arr.length > i){
   //if the pointer1 equal pointer2 values in the arr so pointer2++ 
   if(arr[pointer1] === arr[pointer2]){
       pointer2++;
   }else{
   // if is not equal pointer1 = pointer2 and counter++ and the pointer2++;
   pointer1 = pointer2 ;
   counter++;
   pointer2++;
   }
   i++;
   }
   return counter;
   //return counter;
   };
   console.log(CountUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));//7
   console.log(CountUniqueValues([-2 , -1 , -1 ,0 ,1 ]));//4
   console.log(CountUniqueValues([1,1,1,1,2]));//2
   console.log(CountUniqueValues([])); //0
   console.log(CountUniqueValues([0,1,8,-5,5,5,5])); //5