import { PlatziMath } from '../estadisticaBasica/platziMath.js';
import {
    InterfaceBusiness,
    InterfaceMedianSalariesBusiness,
    InterfaceSalaries
} from './interfaces.js';
import { SALARIES } from './salaries.js';

// Análisis personal de Juanita [id: 1].
const findPerson = (id: number) => SALARIES.find(person => person.id === id);

const medianWorks = (id: number) => {
    const WORKS = findPerson(id)?.works ?? [];
    const SALARIES = WORKS.map(work => work.salary);
    const MEDIAN = PlatziMath.calculateMedian(SALARIES);

    return MEDIAN;
};

const salaryProjection = (id: number) => {
    const WORKS = findPerson(id)?.works ?? [];
    const SALARIES = WORKS.map(work => work.salary);
    const FUTURE_SALARY = getFutureSalary(SALARIES);

    return FUTURE_SALARY;
};

// Análisis empresarial
const businessAnalytics = (data: InterfaceSalaries[]) => {
    const COMPANIES: InterfaceBusiness = {};
    const PEOPLE_WORKS = data.map(person => person.works);

    for (const PERSON_WORK of PEOPLE_WORKS) {
        for (const WORK of PERSON_WORK) {
            if (!COMPANIES[WORK.company]) COMPANIES[WORK.company] = {};

            (COMPANIES[WORK.company][WORK.year])
                ? COMPANIES[WORK.company][WORK.year].push(WORK.salary)
                : COMPANIES[WORK.company][WORK.year] = [WORK.salary];
        }
    }

    return COMPANIES;
};

const medianSalaryCompanies = (business: string, year: number) => {
    const IS_COMPANY = Boolean(COMPANIES[business]);

    if (!IS_COMPANY) return 'Check company name.';
    const IS_YEAR = Boolean(COMPANIES[business][year]);

    if (!IS_YEAR) return 'Check year.';
    const MEDIAN = PlatziMath.calculateMedian(COMPANIES[business][year]);

    return MEDIAN;
};

const salaryProjectionCompanies = (name: string) => {
    if (!COMPANIES[name]) return 'Check company name.';
    const SALARIES_YEAR_COMPANY = COMPANIES[name];
    const SALARIES_MEDIAN: InterfaceMedianSalariesBusiness = {};

    for (const YEAR in SALARIES_YEAR_COMPANY) {
        SALARIES_MEDIAN[YEAR] = PlatziMath.calculateMedian(SALARIES_YEAR_COMPANY[YEAR]);
    }

    const SALARIES_MEDIAN_VALUES = Object.values(SALARIES_MEDIAN);
    const FUTURE_SALARY = getFutureSalary(SALARIES_MEDIAN_VALUES);

    return FUTURE_SALARY;
};

const getFutureSalary = (salaries: number[]) => {
    const GROWTH_PERCENTAGES = [];

    for (let i = 0; i < salaries.length; i++) {
        if (!salaries[i + 1]) break;
        const PREVIOUS_SALARY = salaries[i];
        const NEXT_SALARY = salaries[i + 1];
        const GROWTH = NEXT_SALARY / PREVIOUS_SALARY;

        GROWTH_PERCENTAGES.push(GROWTH);
    }

    const MEDIAN = PlatziMath.calculateMedian(GROWTH_PERCENTAGES);
    const LAST_SALARY = salaries.length - 1;
    const FUTURE_SALARY = salaries[LAST_SALARY] * MEDIAN;

    return Math.round(FUTURE_SALARY);
};

const COMPANIES = businessAnalytics(SALARIES);
