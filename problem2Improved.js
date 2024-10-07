//Time: O(n)
//Space: O(1)

function maxProfit(prices) {
    if (prices.length === 0) return 0;

    let firstBuy = -Infinity, firstSell = 0;
    let secondBuy = -Infinity, secondSell = 0;

    for (let price of prices) {
        // Maximize the profit of first buy
        firstBuy = Math.max(firstBuy, -price);
        // Maximize the profit of first sell
        firstSell = Math.max(firstSell, firstBuy + price);
        // Maximize the profit of second buy
        secondBuy = Math.max(secondBuy, firstSell - price);
        // Maximize the profit of second sell
        secondSell = Math.max(secondSell, secondBuy + price);
    }

    return secondSell;
}

let prices = [2,3,4,2,1,2,3,2,4]
console.log(maxProfit(prices))
