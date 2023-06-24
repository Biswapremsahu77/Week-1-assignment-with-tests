/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// return boolean
//Compares if two strings are anagram.
let NO_OF_CHARS = 256;


function isAnagram(str1, str2) {
   // coverting everything to lowercase
   let str3 = str1.toLowerCase();
   let str4 = str2.toLowerCase();
   if(str1.length==str2.length){
      // Making Array for counting
      let count1 = new Array(NO_OF_CHARS);
      let count2 = new Array(NO_OF_CHARS);
      //for loop for making all the elements in the Array 0;
      for(let i=0;i<NO_OF_CHARS;i++){
         count1[i]=0;
         count2[i]=0;
      }
      // Incrementing the specific character index  by 1
      for(let i = 0 ; i<str1.length ;i++){
         count1[str3[i].charCodeAt(0)]++;
         count2[str4[i].charCodeAt(0)]++;
      }
      //Comparing both count arrays
      for(let i =0;i<count1.length;i++){
         if(count1[i]!= count2[i]){
            return false;
            // if they are not equal then they are not anagram
         }
      }
      return true;
   
  
   } else{
      return false
   }
}

module.exports = isAnagram;
