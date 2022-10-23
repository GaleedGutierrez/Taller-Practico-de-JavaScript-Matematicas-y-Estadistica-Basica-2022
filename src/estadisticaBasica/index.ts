interface InterfaceCounterListMode {
    [key: string]: number
}

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

const sortListBidimensional = (unorderedList: [string, number][], i: number): [string, number][] => {
    let sortedList: [string, number][] = [];

    if (i === 1)
        sortedList = unorderedList.sort((a, b) => b[i] - a[i]);

    return sortedList;
};

const calculateMode = (list: unknown[]) => {
    const COUNTER_LIST: InterfaceCounterListMode = {};

    for (const ITEM of list) {
        (ITEM as keyof typeof COUNTER_LIST in COUNTER_LIST)
            ? COUNTER_LIST[ITEM as keyof typeof COUNTER_LIST] += 1
            : COUNTER_LIST[ITEM as keyof typeof COUNTER_LIST] = 1;
    }

    const LIST_ARRAY = Object.entries(COUNTER_LIST);
    const LAST_SORTED_LIST = LIST_ARRAY[0].length - 1;
    const SORTED_LIST = sortListBidimensional(LIST_ARRAY, LAST_SORTED_LIST);
    const MODE = SORTED_LIST[0][0];

    return MODE;
};

console.log(calculateMode([ 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 1 ]));
