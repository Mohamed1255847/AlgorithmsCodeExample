// mohamed third try
 // given tow strings , write a function to determine if the second string is an anagram of the first . an anagram is 
// a word , phrase , or name formed by rearranging the letters of another , such ad cinema , formed from iceman 


// Expected output 

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

const VaildAnagrams = (str1 ,str2) => {
    // checkif the 2 strings are the same lenght or not 
      if(str1.length != str2.length){
          console.log(" is not the same Anagrams cause the lenght of the input is not the same ");
          console.log(false);
          return false ;
      } 
    // create 2 objects 
         let ob1 = {} , ob2 = {};
         // loop of the first and second array and store them in the objects by the latters counters 
       for(const elemnt of str1) ob1[elemnt] = (ob1[elemnt] || 0 )+1;
       for(const elemnt2 of str2) ob2[elemnt2] = (ob2[elemnt2] || 0 )+1;
       //loop over one obj
       for (const key in ob1){
        //check if the both objects have the same counter of the latters or not 
           if(!(ob2[key] === ob1[key])) {
            console.log(ob1 , ob2);
            console.log(false);
            return false ;
           }
       }
    
       console.log(ob1 , ob2);
       console.log(true);
       return true;         
}