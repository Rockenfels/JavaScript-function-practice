function rot13(str) {
//splits string into individual characters for conversion
  let splitter = str.split("");
  let coded = [];

//maps over characters, automatically adding non alphanumeric characters
//and shifting all other character codes up or down 13 depending on
//current character code.
  splitter.map((char) => {
    const median = 'M'.charCodeAt();
    if(/\W/.test(char)){
      coded.push(char);
    }
    else if(char.charCodeAt() <= median){
      let converted = String.fromCharCode(char.charCodeAt()+13);
      coded.push(converted);
    }
    else{
      let converted = String.fromCharCode(char.charCodeAt()-13);
      coded.push(converted);
    }
  });

//Joins convnverted characters into a single string.
  return coded.join("");
}
