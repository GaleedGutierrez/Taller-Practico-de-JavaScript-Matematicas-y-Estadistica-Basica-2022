export interface InterfaceSalaries {
    name: string;
    id: number
    works: InterfaceJob[];
}

export interface InterfaceJob {
    year: number;
    company: string;
    salary: number;
}

export interface InterfaceBusiness {
    [key: string]: InterfaceYearsSalaries;
}

export interface InterfaceYearsSalaries {
    [key: string]: number[]
}

export interface InterfaceMedianSalariesBusiness {
    [key: string]: number;
}
