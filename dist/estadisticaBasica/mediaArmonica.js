"use strict";
const LIST = [12, 17, 14, 8, 5];
const arithmeticMean = (list) => {
    const NUMBER_ELEMENTS = list.length;
    let sumDivisor = 0;
    for (const ITEMS of list) {
        sumDivisor += 1 / ITEMS;
    }
    const RESULT = NUMBER_ELEMENTS / sumDivisor;
    return Number(RESULT.toFixed(2));
};
console.log(arithmeticMean(LIST));
//# sourceMappingURL=mediaArmonica.js.map