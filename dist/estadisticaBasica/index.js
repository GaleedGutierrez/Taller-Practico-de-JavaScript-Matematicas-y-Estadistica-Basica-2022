"use strict";
const getAverage = (list) => {
    let sumNumbers = 0;
    for (const NUMBER of list) {
        sumNumbers += NUMBER;
    }
    const AVERAGE = sumNumbers / list.length;
    return AVERAGE;
};
const isOdd = (list) => Boolean(list.length % 2);
const isEven = (list) => !(list.length % 2);
const calculareMedian = (list) => {
    const IS_ODD = isOdd(list);
    const IS_EVEN = isEven(list);
    let median = 0;
    if (IS_ODD) {
        const HALF_ODD = Math.floor(list.length / 2);
        median = list[HALF_ODD];
    }
    if (IS_EVEN) {
        const FIRST_HALF = Math.floor(list.length / 2);
        const SECOND_HALF = FIRST_HALF - 1;
        const LIST_HALVES = [list[FIRST_HALF], list[SECOND_HALF]];
        median = getAverage(LIST_HALVES);
    }
    return median;
};
console.log(calculareMedian([10, 20, 30, 40]));
//# sourceMappingURL=index.js.map