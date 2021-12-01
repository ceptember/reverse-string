function reverseString(str) {
  // type your code here
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i-- ){
    newStr = newStr + str.charAt(i); 
  }
  return newStr; 
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: 'ti ni secaps htiw'");
  console.log("=>", reverseString("with spaces in it"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
 
  //loop backwards from str.lenth to 0; --
  // for each i find the charAt(i)
  // set a new string to ""
  // newString = newString + charAt(i)

// And a written explanation of your solution
    /*
      I looped backwards from the end of the string to the beginning and 
      concatinated each character onto a new string 
    */