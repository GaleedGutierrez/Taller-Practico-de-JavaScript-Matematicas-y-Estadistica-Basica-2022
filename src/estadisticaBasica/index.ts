const getAverage = (list: number[]) => {
    let sumaSalaries = 0;

    for (const SALARY of list) {
        sumaSalaries += SALARY;
    }
    const AVERAGE = sumaSalaries / LENGTH_SALARIES;

    return AVERAGE;
};
