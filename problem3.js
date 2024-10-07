const belowTwenty = [
    "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", 
    "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
    "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  
  const tens = [
    "", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  const thousands = ["", "Thousand", "Million", "Billion"];
  
  function numberToWords(num) {
    if (num === 0) return "Zero";
    
    let word = [];
    let i = 0;
  
    while (num > 0) {
      if (num % 1000 !== 0) {
        word.unshift(helper(num % 1000) + thousands[i]);
      }
      num = Math.floor(num / 1000);
      i++;
    }
  
    return word.join(' ').trim();
  }
  
  function helper(num) {
    let result = [];
    
    if (num >= 100) {
      result.push(belowTwenty[Math.floor(num / 100)] + " Hundred");
      num = num % 100;
    }
    if (num >= 20) {
      result.push(tens[Math.floor(num / 10)]);
      num = num % 10;
    }
    if (num > 0) {
      result.push(belowTwenty[num]);
    }
    
    return result.join(' ').trim() + ' ';
  }
  
  
  console.log(numberToWords(1234567)) 
