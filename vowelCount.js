function countVowel(string) {
  const stingarray = string.toLowerCase().split("");
  // console.log(stingarray)
  let vowelNumber = 0;

  for (let i = 0; i < stingarray.length; i++) {
    if (
      stingarray[i] == "a" ||
      stingarray[i] == "e" ||
      stingarray[i] == "i" ||
      stingarray[i] == "o" ||
      stingarray[i] == "u"
    )
      vowelNumber += 1;
  }
  console.log(vowelNumber);

  return vowelNumber;
}

console.log(countVowel("haeIouhlkf"));
