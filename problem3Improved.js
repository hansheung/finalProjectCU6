const belowTwenty = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", 
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"
  ];
  
  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"
  ];
  
  const thousands = ["", "Thousand", "Million", "Billion"];
  
  function numberToWords(num) {
    if (num === 0) return "Zero";
    
    let word = "";
    let i = 0;
  
    while (num > 0) {
      if (num % 1000 !== 0) {
        word = helper(num % 1000) + thousands[i] + " " + word;
      }
      num = Math.floor(num / 1000);
      i++;
    }
  
    return word.trim();
  }
  
  function helper(num) {
    if (num === 0) return "";
    else if (num < 20) return belowTwenty[num] + " ";
    else if (num < 100) return tens[Math.floor(num / 10)] + " " + helper(num % 10);
    else return belowTwenty[Math.floor(num / 100)] + " Hundred " + helper(num % 100);
  }

  console.log(numberToWords(1234568)) 
  
