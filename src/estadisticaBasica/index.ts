const getAverage = (list: number[]): number => {
    let sumNumbers = 0;

    for (const NUMBER of list) {
        sumNumbers += NUMBER;
    }

    const AVERAGE = sumNumbers / list.length;

    return AVERAGE;
};

const isOdd = (list: number[]): boolean => Boolean(list.length % 2);

const isEven = (list: number[]): boolean => !(list.length % 2);

const calculareMedian = (unorderedList: number[]): number => {
    const SORTED_LIST = sortList(unorderedList);
    const IS_ODD = isOdd(SORTED_LIST);
    const IS_EVEN = isEven(SORTED_LIST);
    let median = 0;

    if (IS_ODD) {
        const HALF_ODD = Math.floor(SORTED_LIST.length / 2);

        median = SORTED_LIST[HALF_ODD];
    }

    if (IS_EVEN) {
        const FIRST_HALF = Math.floor(SORTED_LIST.length / 2);
        const SECOND_HALF = FIRST_HALF - 1;
        const LIST_HALVES = [ SORTED_LIST[FIRST_HALF], SORTED_LIST[SECOND_HALF] ];

        median = getAverage(LIST_HALVES);
    }

    return median;
};

const sortList = (unorderedList: number[]): number[] => {
    const SORTED_LIST = unorderedList.sort((a, b) => a - b);

    return SORTED_LIST;
};

console.log(calculareMedian([ 10, 20, 5, 30, 40, 1, 0, 3 ]));
