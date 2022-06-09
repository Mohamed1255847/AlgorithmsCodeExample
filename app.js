//Recursion problem 


// const Recursion =num=>{
//      if( num <= 0){
//          console.log("All Done!");
//          return ;
//      }
//      console.log(num);
//      num-- ;
//      Recursion(num);
// }
// Recursion(100)


// const Recursion2 = num =>{
//     if(num < 0) return 1;
//     console.log(num);
//     return num + Recursion2(num-1);
// }
// Recursion2(100);


// const factorial = num =>{
//      if(num < 0) return 1;
//      console.log(num);
//      return num * factorial(num-1);    
// }

const collectoddValues = arr =>{

    let reslut =[] ;
    const helper = helperinput=>{
        if(helperinput.length === 0) return ;
         console.log('the insde array',helperinput);
         console.log('the orignal array',arr);
        if(helperinput[0] % 2 !== 0) reslut.push(helperinput[0]);
        helper(helperinput.slice(1));
    }
    
    helper(arr);
    return reslut;
}

console.log(collectoddValues([1,2,3,4,5,6,7,8,9,10]));




