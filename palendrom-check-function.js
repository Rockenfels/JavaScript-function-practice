function palindrome(str) {
  //Filters out characters that are not alphanumeric and converts to lower case
  //for comparison.

    break;
  const wordRegEx = /([a-z]*[A-Z]*[0-9]*)+/gi;
  let parsedWord = str.match(wordRegEx).join("").toLowerCase();

  //checks characters from beginning and end of string for matches
  let result = true;
  let a = 0;
  let z = parsedWord.length-1;
  while(a < parsedWord.length){
      if(parsedWord[a] !== parsedWord[z])
      {result = false;}
      a++;
      z--;
  }
  return result;
}
