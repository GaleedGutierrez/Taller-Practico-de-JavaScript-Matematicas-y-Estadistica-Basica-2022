import { PlatziMath } from '../estadisticaBasica/platziMath.js';

import { SALARIES } from './salaries.js';

// Análisis personal de Juanita [id: 1].
const findPerson = (id: number) => SALARIES.find(person => person.id === id);

const medianWorks = (id: number) => {
    const WORKS = findPerson(id)?.works;
    const SALARIES = WORKS?.map(work => work.salary);
    let median = 0;

    if (SALARIES) median = PlatziMath.calculateMedian(SALARIES);

    return median;
};

medianWorks(1);
