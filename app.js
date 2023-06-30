let oneEuroIs = {
    "JPY": 127.9, // Japan Yen
    "USD": 1.2,   // US Dollar
    "GBP": 0.8    // British Pound
};

/* explanation of the process for the 1st case: fromDollarToYen 
oneEuroIs = "JPY": 127.9 and "USD": 1.2, it means that 127,9 is equal to 1,2, so
JPY 127,9 = USD 1,2 = JPY 127,9 * USD 10 / USD 1,2 = JPY x = 10658.333 Yen
JPY   x   = USD 10 */

function fromDollarToYen(dollarAmount) {
    let yenAmount = dollarAmount * oneEuroIs["JPY"] / oneEuroIs["USD"];
    return yenAmount;
}

function fromEuroToDollar(euroAmount) {
    let dollarAmount = euroAmount * oneEuroIs["USD"];
    return dollarAmount;
}

function fromYenToPound(yenAmount) {
    let poundAmount = yenAmount * oneEuroIs["GBP"] / oneEuroIs["JPY"];
    return poundAmount;
}

console.log(fromDollarToYen(10));   // Output: 10658.333333333332 (approximately)
console.log(fromEuroToDollar(10));  // Output: 12
console.log(fromYenToPound(10));    // Output: 0.06254886630179828 (approximately)

module.exports = {
    fromDollarToYen : fromDollarToYen,
    fromEuroToDollar : fromEuroToDollar,
    fromYenToPound : fromYenToPound
};
