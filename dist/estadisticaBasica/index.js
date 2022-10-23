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
        const HALF = Math.floor(list.length / 2);
        median = list[HALF];
    }
    if (IS_EVEN) {
        const FIRST_POSITION = Math.floor(list.length / 2);
        const SECOND_POSITION = FIRST_POSITION - 1;
        median = getAverage([list[FIRST_POSITION], list[SECOND_POSITION]]);
    }
    return median;
};
console.log(calculareMedian([0, 9, 2]));
//# sourceMappingURL=index.js.map