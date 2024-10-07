//Time: O(n)
//Space: O(n)
function maxProfit(prices) {
    if (prices.length === 0) return 0;

    const n = prices.length;
    
    // Arrays to store the max profit up to i and from i
    const leftProfit = Array(n).fill(0); // Max profit with 1 transaction up to day i
    const rightProfit = Array(n).fill(0); // Max profit with 1 transaction from day i

    // Calculate the maximum profit with 1 transaction up to day i
    let leftMinPrice = prices[0];
    for (let i = 1; i < n; i++) {
        leftMinPrice = Math.min(leftMinPrice, prices[i]);
        leftProfit[i] = Math.max(leftProfit[i - 1], prices[i] - leftMinPrice);
    }

    // Calculate the maximum profit with 1 transaction from day i
    let rightMaxPrice = prices[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMaxPrice = Math.max(rightMaxPrice, prices[i]);
        rightProfit[i] = Math.max(rightProfit[i + 1], rightMaxPrice - prices[i]);
    }

    // Combine the two transactions
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        maxProfit = Math.max(maxProfit, leftProfit[i] + rightProfit[i]);
    }

    return maxProfit;
}

let prices = [2,3,4,2,1,2,3,2,4]
console.log(maxProfit(prices))