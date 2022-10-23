const getAverage = (list: number[]) => {
    let sumaSalaries = 0;

    for (const SALARY of list) {
        sumaSalaries += SALARY;
    }
    const AVERAGE = sumaSalaries / list.length;

    return AVERAGE;
};

const isEven = (list: number[]) => list.length % 2 === 0;
