import { InterfaceCounterListMode } from './interfaces';

export class PlatziMath {
    static getAverage (list: number[]): number {
        let sumNumbers = 0;

        for (const NUMBER of list) {
            sumNumbers += NUMBER;
        }

        const AVERAGE = sumNumbers / list.length;

        return AVERAGE;
    }

    static isOdd = (list: number[]): boolean => Boolean(list.length % 2);

    static isEven = (list: number[]): boolean => !(list.length % 2);

    static calculateMedian (unorderedList: number[]): number {
        const SORTED_LIST = this.sortList(unorderedList);
        const IS_ODD = this.isOdd(SORTED_LIST);
        const IS_EVEN = this.isEven(SORTED_LIST);
        let median = 0;

        if (IS_ODD) {
            const HALF_ODD = Math.floor(SORTED_LIST.length / 2);

            median = SORTED_LIST[HALF_ODD];
        }

        if (IS_EVEN) {
            const FIRST_HALF = Math.floor(SORTED_LIST.length / 2);
            const SECOND_HALF = FIRST_HALF - 1;
            const LIST_HALVES = [ SORTED_LIST[FIRST_HALF], SORTED_LIST[SECOND_HALF] ];

            median = this.getAverage(LIST_HALVES);
        }

        return median;
    }

    static sortList (unorderedList: number[]): number[] {
        const SORTED_LIST = unorderedList.sort((a, b) => a - b);

        return SORTED_LIST;
    }

    static sortListBidimensional (unorderedList: [string, number][], i: number): [string, number][] {
        let sortedList: [string, number][] = [];

        if (i === 1)
            sortedList = unorderedList.sort((a, b) => b[i] - a[i]);

        return sortedList;
    }

    static calculateMode (list: unknown[]) {
        const COUNTER_LIST: InterfaceCounterListMode = {};

        for (const ITEM of list) {
            (ITEM as keyof typeof COUNTER_LIST in COUNTER_LIST)
                ? COUNTER_LIST[ITEM as keyof typeof COUNTER_LIST] += 1
                : COUNTER_LIST[ITEM as keyof typeof COUNTER_LIST] = 1;
        }

        const LIST_ARRAY = Object.entries(COUNTER_LIST);
        const LAST_SORTED_LIST = LIST_ARRAY[0].length - 1;
        const SORTED_LIST = this.sortListBidimensional(LIST_ARRAY, LAST_SORTED_LIST);
        const MODE = SORTED_LIST[0][0];

        return MODE;
    }

    static arithmeticMean (list: number[]) {
        const NUMBER_ELEMENTS = list.length;
        let sumDivisor = 0;

        for (const ITEMS of list) {
            sumDivisor += 1 / ITEMS;
        }

        const RESULT = NUMBER_ELEMENTS / sumDivisor;

        return Number(RESULT.toFixed(2));
    }
}
