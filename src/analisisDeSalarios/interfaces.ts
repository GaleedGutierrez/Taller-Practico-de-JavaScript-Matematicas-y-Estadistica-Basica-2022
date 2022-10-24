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
