function telephoneCheck(str) {
  let firstParenRegex = /\(/;
  let lastParenRegex = /\)/;

  //checks to see if both () are present
  if(firstParenRegex.test(str)){
    if(/\(/.test(str) && /\)/.test(str)){
      let phoneRegEx = /^1*[ |\(| \(]*[2-9]\d{2}[ |\-|\)|\) ]*\d{3}[\-| ]*\d{4}$/;
    return phoneRegEx.test(str);
    }
    else if(!lastParenRegex.test(str)){
      return false;
    }
  }


  //returns false if only the last ) is present
  else if(lastParenRegex.test(str)){
    if(!firstParenRegex.test(str)){
      return false;
    }
    else{
      let phoneRegEx = /^1*[ |\(| \(]*[2-9]\d{2}[ |\-|\)|\) ]*\d{3}[\-| ]*\d{4}$/;
    return phoneRegEx.test(str);
    }
  }
  else{
    let phoneRegEx = /^1*[ |\(| \(]*[2-9]\d{2}[ |\-|\)|\) ]*\d{3}[\-| ]*\d{4}$/;
    return phoneRegEx.test(str);
  }
}
