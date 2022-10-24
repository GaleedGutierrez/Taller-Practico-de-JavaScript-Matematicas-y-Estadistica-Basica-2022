import { PlatziMath } from '../estadisticaBasica/platziMath.js';
import { SALARIES } from './salaries.js';
// Análisis personal de Juanita [id: 1].
const findPerson = (id) => SALARIES.find(person => person.id === id);
const medianWorks = (id) => {
    const WORKS = findPerson(id)?.works ?? [];
    const SALARIES = WORKS.map(work => work.salary);
    const MEDIAN = PlatziMath.calculateMedian(SALARIES);
    return MEDIAN;
};
const salaryProjection = (id) => {
    const WORKS = findPerson(id)?.works ?? [];
    const SALARIES = WORKS.map(work => work.salary);
    const GROWTH_PERCENTAGES = [];
    for (let i = 0; i < SALARIES.length; i++) {
        if (!SALARIES[i + 1])
            break;
        const PREVIOUS_SALARY = SALARIES[i];
        const NEXT_SALARY = SALARIES[i + 1];
        const GROWTH = NEXT_SALARY / PREVIOUS_SALARY;
        GROWTH_PERCENTAGES.push(GROWTH);
    }
    const MEDIAN = PlatziMath.calculateMedian(GROWTH_PERCENTAGES);
    const LAST_SALARY = SALARIES.length - 1;
    const FUTURE_SALARY = SALARIES[LAST_SALARY] * MEDIAN;
    return Math.round(FUTURE_SALARY);
};
console.log(salaryProjection(1));
//# sourceMappingURL=index.js.map