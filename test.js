// import the function fromDollarToYen from the app.js file
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// start your first test
test("10 dollars to yen are equal to 1065.8333333333335", () => {
    // inside the test we call our fromDollarToYen function with the dollar amount
    let total = fromDollarToYen(10);

    // we expect the conversion result to be approximately 1065.8333333333335
    expect(total).toBe(1065.8333333333335);
});


test("10 euros to dollars are equal to 12", () => {
    let total = fromEuroToDollar(10);

    expect(total).toBe(12);
});

test("10 yens to pounds are equal to 0.06254886630179828", () => {
    let total = fromYenToPound(10);

    expect(total).toBe(0.06254886630179828);
});


/* Taking as an example the fromEuroToDollar case, and here I add three posibles
escenarios (besides the one that I use) to get the same result:

First

test("10 euros to dollars are equal to 12", () => {
    const { fromEuroToDollar } = require('./app.js');

    const euros = 10;
    const expectedDollars = 12;

    const dollars = fromEuroToDollar(euros);

    expect(dollars).toBe(expectedDollars);
});

Second

test("10 euros to dollars are equal to 12", () => {
    const { fromEuroToDollar } = require('./app.js');

    const euros = 10;
    const expectedDollars = 12;

    const dollars = fromEuroToDollar(10);

    expect(dollars).toBe(12);
});

Third

test("10 euros to dollars are equal to 12", () => {
    const { fromEuroToDollar } = require('./app.js');

    const euros = fromEuroToDollar(10)
    const expected  = 10 * 12;

    expect(fromEuroToDollar(10)).toBe(12);
});

*/