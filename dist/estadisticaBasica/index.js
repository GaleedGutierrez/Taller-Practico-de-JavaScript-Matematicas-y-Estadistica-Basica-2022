"use strict";
const getAverage = (list) => {
    let sumaSalaries = 0;
    for (const SALARY of list) {
        sumaSalaries += SALARY;
    }
    const AVERAGE = sumaSalaries / list.length;
    return AVERAGE;
};
const isEven = (list) => list.length % 2 === 0;
//# sourceMappingURL=index.js.map