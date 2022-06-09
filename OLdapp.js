// Write a Function which takes in a string and returns counts of each character in the string

const countTheCharacter = str => {
    //Alogrithm to solve it 
    // we need to return object by each character number in the string 
    let CharacterResult = {};
    // looping in the string for each character
    for (let i = 0; i < str.length; i++) {
        var char = str[i];
        // check if the character in the object or not 
        if (CharacterResult[char] > 0) {
            // if it there the character in the object will be ++
            CharacterResult[char]++;
        } else {
            // else it will add the character and make it by 1 
            CharacterResult[char] = 1;
        }

        // return the object result  

    }
    console.log(CharacterResult);
    return CharacterResult;

}
/******************************************************************** */

//frequency Counters

/* 
Write a function called same , which accepts two arrays .
the function should return true if every value in the array 
has it's corresponding value squared in the second array.
the frequancy of values must be the same .

expected result 
same([1,2,3] , [4,1,9]) return true
same([1,2,3] , [1,9]) return false
same([1,2,1] , [4,4,1]) return false (must be same frequency)
*/
// // Algorithm
// const same = (array1 , array2)=>{
// let temp1 = [] , temp2=[] ;
// // if the first array.length != the Second Array.Lenght then we have to return "the first array not match with the second array in lenght"
// if (array1.length === array2.length){
// //copy the Orignal Arrays 
//   let copyArray1 = [] , copyArray2 = []  , counter = 0;
// // loop of every element in the first array 
// firstArrayLoop:for(const elemnt of array1 ){
//     //loop in the second array 
//    secondArrayLoop:for(const secondelemnt of array2){
//         // if the squared of elemnt in the first array equal any elemnt in the array then we move to the second element in the first array and search over and over
//         if(elemnt**2 === secondelemnt || secondelemnt**2 === elemnt){
//                  // search section
//                     let search ;
//                      if(counter === 0){
//                         search = false ;
//                      }else {
//                          search= true ;
//                      }
//                 /********************************************************* */
//                     if(search){
//                         break secondArrayLoop ;
//                     }else{
//                         copyArray2.push(secondelemnt);
//                         console.log("Match" , elemnt , secondelemnt);
//                     }


//         }else{

//         }


//     }

//     // else if the squard elemnt not match return false    

// }

// }else {

//     console.log("the lenght of the both array not match ");
//     comparestate = false ;
// }


// console.log(comparestate);
// console.log(result);
// }



// second try 
// const same = (array1 , array2) =>{
// //first copy the arrays in temp arrays 
// let temp1 =[...array1] , temp2=[...array2];
// //condition if lenght of the first array equal the lenght of the second array so contiune 
// if(temp1.length === temp2.length){
//    let arrayOfoperation1 = [] , arrayOfoperation2 = [] ;
//    /************* test area  */ 

//    /***************************/
//    //loop in the first array 
//    for(const elemntOfTepm1 of temp1){
//            // loop in the second array
//            for(const elemntOfTemp2 of temp2){
//                //compare the value of the first elemnt in the first array by all elemnts in the second array 
//                if(elemntOfTepm1**2 === elemntOfTemp2 || elemntOfTemp2**2 === elemntOfTepm1){
//                    //if is true check the arrayOfoperation1 if is null or undfind copy the elemnt to it and then delete it from the temp1 array and the same steps we will do it with the second array also 
//                    if((arrayOfoperation1 === null || arrayOfoperation1 === undefined)&&(arrayOfoperation2 === null || arrayOfoperation2 === undefined)){
//                        // first push the values in the arrayOfoperation1 and arrayOfoperation2
//                        arrayOfoperation1.push(elemntOfTepm1);
//                        arrayOfoperation2.push(elemntOfTemp2);
//                        // get the index in the arrays of the both elemnts 
//                        let indexOfArray1 = temp1.findIndex(elemntOfTepm1) , indexOfArray2 = temp2.findIndex(elemntOfTemp2);
//                        // delete both of them from the original 
//                        temp1.splice(indexOfArray1 , 1);
//                        temp1.splice(indexOfArray2 , 1);
//                    }
//                    //if the compration not match return false and message must be in same frequency
//                    else{
//                           console.log("must be in same frequency");
//                           return false ;
//                    }
//                }
//            }
//    }
//    // last compartion between result to check if is true or not 
//    if (arrayOfoperation1.length === array1.length && arrayOfoperation2.length === array2.length) return true ;
// }
// //if the lenght of the first array and second array not equal so return false  
// else{
// console.log("the first array in not the same lenght of the second array");
// console.log(false);
// return false;
// }
// }

// same([1,2,3] , [4,1,9]);
// same([1,2,3] , [1,9]);
// same([1,2,1] , [1,9]);
// same([1,2,1] , [1,9,4]);


/******************************************************************* */


// Anagrams problems 

// first  problem 

// given tow strings , write a function to determine if the second string is an anagram of the first . an anagram is 
// a word , phrase , or name formed by rearranging the letters of another , such ad cinema , formed from iceman 

// output 

// vaildAnagram('', ''); //true 
// vaildAnagram('azz', 'zza'); //false 
// vaildAnagram('anagram', 'nagaram'); //true 
// vaildAnagram('rat', 'car'); //false 
// vaildAnagram('awesome', 'awesom'); //false 
// vaildAnagram('qeywrt', 'qeywrt'); //true 
// vaildAnagram('timetexttwist', 'texttwisttime'); //false 


// mohmaed first try 

// const VaildAnagrams = (str1 , str2) => {


//     // create function to check the object are empty or not 
//     const isEmpty = obj => {
//         for(var key in obj) {
//             if(obj.hasOwnProperty(key))
//                 return false;
//         }
//         return true;
//     }


//     // create function to can run with both of the input

// const loopInsideTheStringAndCountIt = (O , S ) =>{
//        // foruth create for loop to enter str1 
//        for(const elemnt of  S){
//         // loop on the object1
//      for(const elemntobject in O){
//            /*
//        check every elemnt in the array by the boject  of output1 by the object key
//        and compere it if is not inside the object add it to the object if is inside so ++
//       */
//          if(elemnt === elemntobject){
//              obj1[elemntobject]++ ;
//          }else{
//                obj1.elemnt = 1 ;
//          }
//      }
//    }
// }



//     /*******************end of the function  */
//     //first try to write the algorithm*************** 
//     // create 2 objects to save the output 
//     // 1 first check if the inputs is string {
//     //2 if is string check if the inputs have the same length { 
//     // 5 enter for loop 
//     //4 }if is not retiurn false and console message    
//     //3 }if is not string return false with console the inputs is not string; 




// //second try to write alogrthim*****************
//   //first creat 2 objects to store the output 
//    let obj1 = {} , obj2={};
//    obj1 === {} ? console.log("is null"):console.log("isnotnull");
//    console.log(obj1)
//   // second check if the input are strings 
//   if(typeof str1 === "string" && typeof str2 === "string"){
//      // third check the inputs have the same lenght 
//     //  if(str1.length === str2.length){
//   /*************begin of the for loop sector  */

//            // foruth create for loop to enter str1 
//      for(let elemnt of  str1){
//          // check if the object is empty 
//          if( isEmpty(obj1)){     
//                      /*
//                  check every elemnt in the array by the boject  of output1 by the object key
//                  and compere it if is not inside the object add it to the object if is inside so ++
//                 */
//                 if(obj1.hasOwnProperty(elemnt)){
//                          obj1[elemnt]++ ;
//                    }else{
//                     obj.elemnt = 1 ;
//                    }
//                }

//          }
//          // loop on the object1

//     } 
//      /*****end of for loop sector  */
//     //  }else{
//     //      // the lenght is not the same
//     //      console.log("the lenght of both words not equal each other");
//     //      return false ;
//     //  };
//      // end of the small if and start of else of the biggest if
// //   }else{
// //       // the type is not string 
// //       console.log("one of the inputs is not string please enter string to the function");
// //       return false;
// //   }
//   // rewrite the previous 2 steps to apply it in the second string 
//   // compear the 2 output objects if is the keys are the same  if is not return false 
//   // compear the 2 output objects if the the values are the same  if it's return true if is not return false 
//    return obj1 , obj2 ;

// }

/*******************************mohamed  Second try*/


// const VaildAnagrams = (str1 , str2) => {
//     const isEmpty = obj => {
//         for(var key in obj) {
//             if(obj.hasOwnProperty(key))
//                 return false;
//         }
//         return true;
//     }
// const loopInsideTheStringAndCountIt = (O , S ) =>{
// if( isEmpty(O)){
//     for(let elemnt of S){

//     }
// }
//        for(const elemnt of  S){
//      for(const elemntobject in O){

//          if(elemnt === elemntobject){
//              obj1[elemntobject]++ ;
//          }else{
//                obj1.elemnt = 1 ;
//          }
//      }
//    }
// }

//    let obj1 = {} , obj2={};
//   if(typeof str1 === "string" && typeof str2 === "string"){
//      for(let elemnt of  str1){

//          if( isEmpty(obj1)){     

//                 if(obj1.hasOwnProperty(elemnt)){
//                          obj1[elemnt]++ ;
//                    }else{
//                     obj1.elemnt = 1 ;
//                    }
//                }



//     } 
// }


// return obj1 , obj2 ;
// }


// console.log(VaildAnagrams('mohamw' , 'mohamw'));

// mohamed third try
// given tow strings , write a function to determine if the second string is an anagram of the first . an anagram is 
// a word , phrase , or name formed by rearranging the letters of another , such ad cinema , formed from iceman 

// Expected outPut 

// vaildAnagram('', ''); //true 
// vaildAnagram('azz', 'zza'); //false 
// vaildAnagram('anagram', 'nagaram'); //true 
// vaildAnagram('rat', 'car'); //false 
// vaildAnagram('awesome', 'awesom'); //false 
// vaildAnagram('qeywrt', 'qeywrt'); //true 
// vaildAnagram('timetexttwist', 'texttwisttime'); //false 


// algorithm 
// create 2 objects 
// checkif the 2 strings are the same lenght or not 
// loop of the first and second array and store them in the objects by the latters counters 
//check if the both objects have the same counter of the latters or not 

// const VaildAnagrams = (str1 ,str2) => {
//     // checkif the 2 strings are the same lenght or not 
//       if(str1.length != str2.length){
//           console.log(" is not the same Anagrams cause the lenght of the input is not the same ");
//           console.log(false);
//           return false ;
//       } 
//     // create 2 objects 
//          let ob1 = {} , ob2 = {};
//          // loop of the first and second array and store them in the objects by the latters counters 
//        for(const elemnt of str1) ob1[elemnt] = (ob1[elemnt] || 0 )+1;
//        for(const elemnt2 of str2) ob2[elemnt2] = (ob2[elemnt2] || 0 )+1;
//        //loop over one obj
//        for (const key in ob1){
//         //check if the both objects have the same counter of the latters or not 
//            if(!(ob2[key] === ob1[key])) {
//             console.log(ob1 , ob2);
//             console.log(false);
//             return false ;
//            }
//        }

//        console.log(ob1 , ob2);
//        console.log(true);
//        return true;         
// }
// // VaildAnagrams(' 7455',' 8455');

// //  VaildAnagrams('', ''); //true 
// //  VaildAnagrams('azz', 'zza'); //false 
// //  VaildAnagrams('anagram', 'nagaram'); //true 
// //  VaildAnagrams('rat', 'car'); //false 
// //  VaildAnagrams('qeywrt', 'qeywrt'); //true 
// //  VaildAnagrams('timetexttwist', 'texttwisttime'); //true 
// VaildAnagrams('awes','awsome');
// VaildAnagrams('a','a');


/********************************Multiple Pointers  DataStructure Pattern*/

// Example
/* 
Write a function called sumZero which accepts a stored array of integeres . the function sholud find the first pair where the sum is 0
.returnan array that includes both values that sum zero or undefind if a pair dose not exist 
*/
/* 
Expected output 
 SumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
 SumZero([-2 ,0,1,3]) // undefined
 SumZero([1,2,3]) // undefined
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


// //1- create function thats accept on array as arguments 

// const SumZero = ArrayOfIntegres =>{

//     for(const elemnt of ArrayOfIntegres){
//          //2- check if the array is numbers 
//         if(!(typeof elemnt === "number") ){
//             console.log("something is not right " ,"is not number " ,typeof elemnt);
//             console.log(ArrayOfIntegres);
//             return undefined;
//         }

//         //4- check if the array is from integres only 
//         // i'm not sure this part it will work
//         if(!(Number.isInteger(elemnt))){
//             console.log('we convert some numbers to intergers ');
//             elemnt = Math.floor(elemnt);
//         }
//         /******************************** */
//     }

//        // 6- create pointer in the begining of the array 
//        //7- create pointer in the last of the array 
//        // 8- create sum var
//        let first , last  , sum  , pointer;
//        first = 0 ;
//        pointer = 0 ;
//        last = ArrayOfIntegres.length -1 ;

//        //8- loop (but by what condition ! and which loop is perfect)
//    firstLoop: while (pointer > ArrayOfIntegres.length){
//     console.log("array", ArrayOfIntegres.length);
//     console.log( "pointer",pointer);

//      pointer = first ;
//      for(const elemnt of ArrayOfIntegres){
//       sum = ArrayOfIntegres[pointer] + elemnt ;

//       if(sum === 0)return[ArrayOfIntegres[pointer] , elemnt] ;
//            }
//           pointer++; 
//        }
// console.log(ArrayOfIntegres);
// return undefined;

// }




/***Mohamed Second Try */


// const SumZero = Arr => {
//     let pointer = 0, Sum, SloutionArray = [], PointerOfFor = 0;

//     console.log("before Delete ", Arr);
//     while (pointer < Arr.length) {
//         PointerOfFor = 0;
//         for (const element of Arr) {
//             if (Arr[pointer] === element) continue;
//             Sum = Arr[pointer] + element;
//             if (Sum === 0) {
//                 SloutionArray.push([Arr[pointer], element])
//                 Arr.splice(pointer, 1);
//                 Arr.splice(PointerOfFor, 1);
//             }
//             PointerOfFor++;
//         }
//         pointer++;

//     }
//     if (SloutionArray === []) {
//         return undefined;
//     }
//     console.log("after delete", Arr);
//     return SloutionArray;
// }

// console.log(SumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
// console.log(SumZero([-2, 0, 1, 3])); // undefined
// console.log(SumZero([1, 2, 3])); // undefned
// console.log(SumZero([4, 5, 7, 9, -9, 20]));
// console.log(SumZero([4, -4, 5, 7, 9, -9, 20]));


// const sumzero = arrt =>{
//     let left = 0;
//     let right = arrt.length-1;
//     while(left < right){
//         let sum = arrt[left] + arrt[right]; 
//           if(sum === 0){
//               return [arrt[left] , arrt[right]];
//           }else if (sum > 0){
//               right -- ;
//           }else{
//               left ++ ;
//           }
//     }
// }
// console.log("course sloition");
// console.log(sumzero([4,-4,5,7,9,-9,20]));
// console.log(sumzero([-2 ,0,1,3]));
// console.log(sumzero([-2 ,0,1,3]));


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
// const CountUniqueValues = arr =>{
//  //if the arr lenght is 0 return 0 
// if( arr.length === 0) return 0 ;   
// // create pointer1 and pointer2 and counter 
// //put the pointer1 in the first of the array and pointer2 after pointer1 by one step and the counter by 0 
// let pointer1 = 0 , pointer2 = 1 , counter = 0 , i =0; 
// //loop over the arr and the condition is i < arr.length 
// while(arr.length > i){
// //if the pointer1 equal pointer2 values in the arr so pointer2++ 
// if(arr[pointer1] === arr[pointer2]){
//     pointer2++;
// }else{
// // if is not equal pointer1 = pointer2 and counter++ and the pointer2++;
// pointer1 = pointer2 ;
// counter++;
// pointer2++;
// }
// i++;
// }
// return counter;
// //return counter;
// };
// console.log(CountUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));//7
// console.log(CountUniqueValues([-2 , -1 , -1 ,0 ,1 ]));//4
// console.log(CountUniqueValues([1,1,1,1,2]));//2
// console.log(CountUniqueValues([])); //0
// console.log(CountUniqueValues([0,1,8,-5,5,5,5])); //5




/* sliding window pattern */


/* 

Example 1 

Write a function called maxSubarraySum which accepts an array of integers and a number called n . the function
should calculate the maximum sum of n consecutive elements in the array 

Alogrithm 
*/


//first try of mohamed 
// const maxSubarraySum = arr =>{
    
// // create 2 pointers 
// let pointer1= 0 , pointer2 = 0 , max = -Infinity;
// // create for loop and condition pointer2 < array.lenght 

// const moveAndSum = arraa => {
    
// }
//    while(pointer2<arr.length){


//     if(pointer2 === 0){
//         // if the pointer2 equal 0 so the pointer2 equal num
//     }else if((pointer2*2) > arr.length){
//        // if the pointer2 * 2 will exceed the arr.enght so the pointer2 equal arra.lenght -1
//        pointer2 = arr.length-1;
//     }else{
//       // if not pointer2 * num 
//       pointer2 = pointer2*2; 
//     }

//     }
// }



// second try of mohamed (unsuccessful try)

// algorithm
// create 2 pointers and max equal nagintive infinity
// loop on the code by while statment using condition pointer2 !== arr.lenght-1
    // create sum var equal zero
//check if the value of the (pointer2 - (arr.lenght -1)) < n so then pointer2 equal arr.lenght-1  (so imporatnt step)
//loop at the array to move the  pointer1 step by step 
//check if the pointer1 === pointer2 if true break the for loop  and retuen max 
// sum the value of each move of the pointer1 
// compare the sum by the max value of the sum value if max < sum so then max = sum 

// const MaxSubarraySum = (arr , n)=>{
//     // create 2 pointers and max equal nagintive infinity
//     let pointer1 = 0 , pointer2= 0 , max = -Infinity ;
//     // loop on the code by while statment using condition pointer2 !== arr.lenght-1 
//     while(pointer2 !== arr.length-1 && pointer2 < arr.lenght){
//       // create sum var equal zero
//         let sum = 0;
//      //check if the value of the (pointer2 - (arr.lenght -1)) < n so then pointer2 equal arr.lenght-1  (so imporatnt step)
//      if(((arr.length -1) - pointer2) < n ){
//          console.log("we sum in this step " , pointer2-(arr.length -1) , "elemnts only cause the ");
//          pointer2 = arr.lenght-1;
//      }else{
//         pointer2 = pointer2 + n;
//      };
// //loop at the array to move the second pointer1 step by step 
//         for(let i = 0 ; i <= n ; i++){
//          sum+=arr[pointer1];
//          console.log(sum , "from inside the loop");
//          console.log(pointer1 , "the pointer");
//          pointer1++;
//      }
//     // compare the sum by the max value of the sum value if max < sum so then max = sum 
//       sum > max ? max = sum : null ;
//     }
//     console.log("max value" , max);
//  return max ;
// }

// MaxSubarraySum([1,2,5,2,8,1,5],2);
// MaxSubarraySum([1,2,5,2,8,1,5],4);



/******************Divide and conquer pattern */

/*
 example 1 :-  search(arr, val)
   Given a sorted array of integers, write a function called search,
  that accepts a value and returns the index where the value passed to the function is located.
  If the value is not found, return -1.
  */
 

 // algorithm

//create for loop for each elemnt 
// if the value we enter in the function (what we search for ) is equal return i value
// after for loop return -1

// code (mohamed first try) native sloution O(n) working 100%

// const search = (arr, val) =>{
//      //create for loop for each elemnt 
//    for(let i = 0 ; i < arr.length ; i++){
//        // if the value we enter in the function (what we search for ) is equal return i value
//        if(arr[i] === val){
//         console.log("the index of the value in the array is " , i );
//         return ;
//        }
      
//    }
//    console.log("we not found your value in the array");
// };

// search([1,2,3,4,5,6],6);
// search([1,2,3,4,5,6],3);
// search([1,2,3,4,5,6],11);
// search([1,2,3,4,5,6],14);
// search([1,2,3,4,5,6],4);
// search([1,2,3,4,5,6],3);
// search([1,2,3,4,5,6],5);


// const search = (arr, val) => {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
//       console.log("the left index is now " + left + " the right index is now " + right)
//       console.log("the mid index now is " + mid)
//       let curr = arr[mid];
  
//       if (arr[mid] < val) {
//           console.log("the value u enter it was bigger than the mid the value is " + val + " and the mid is " + arr[mid]);
//         left = mid + 1;
//         console.log("so we make the left step forwerd and it's now " + arr[left]);
//         console.log('################################################################################################');  
//     } else if (arr[mid] > val) {
//         console.log("the value u enter it was smaller than the mid the value is " + val + "and the mid is" + arr[mid]);

//         right = mid - 1;
//         console.log("so we make the right back one step and it's now " + arr[right]);
//         console.log('***************************************************************************************************');  
        
//       } else {
//           console.log("the mid is equal your search " + "the mid is " +arr[mid] + "the value is " + val);
//         return;
//       }
//     }
//       console.log(" we not found your search in the array thanks !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
//     return;
//   };

// // search([1,2,3,4,5,6],6);
// // search([1,2,3,4,5,6],3);
// // search([1,2,3,4,5,6],11);
// // search([1,2,3,4,5,6],14);
// // search([1,2,3,4,5,6],4);
// // search([1,2,3,4,5,6],3);
// // search([1,2,3,4,5,6],5);


// search([120,8,3,40,11,6],120);
// search([1,2,3,4,5,6],3);
// search([1,2,3,4,5,6],11);
// search([1,2,3,4,5,6],14);
// search([1,2,3,4,5,6],4);
// search([1,2,3,4,5,6],3);
// search([1,2,3,4,5,6],5);



// let sumFactorial = num =>{
//   if(num === 1) return  1 ;
//   console.log("the function called  and number is "+ num)
//   return num * sumFactorial(num-1);
// }


// console.log(sumFactorial(1))


// const TryFireBase = async() => {
//       const postData = {
//           name:'mohamed',
//           job:'react native developer',
//           phone:'01245875422',
//       }
// //auth.uid != null
//       const response = await fetch("https://wsp1-3fbb6-default-rtdb.europe-west1.firebasedatabase.app/Expenses.json",
//       { 
//         method:'POST',
//         headers:{
//             'Content-Type' : 'application/json'
//         },
//         body: JSON.stringify(postData , )
//       }).then(reponk => reponk.json()).then(data => console.log(data));
//       return response
// }

// TryFireBase();
