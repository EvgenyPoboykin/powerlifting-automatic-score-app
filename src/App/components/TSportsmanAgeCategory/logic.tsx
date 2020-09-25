const now = new Date();

const AgeCategoryFormula = (age: number, sj: any, j: any, o: any, m1: any, m2: any, m3: any, m4: any) => {
    if (now.getFullYear() - age >= 15.0 && now.getFullYear() - age <= 18.0) {
        return sj;
    } else if (now.getFullYear() - age >= 19.0 && now.getFullYear() - age <= 23.0) {
        return j;
    } else if (now.getFullYear() - age >= 23.0 && now.getFullYear() - age <= 39.0) {
        return o;
    } else if (now.getFullYear() - age >= 40.0 && now.getFullYear() - age <= 49.0) {
        return m1;
    } else if (now.getFullYear() - age >= 50.0 && now.getFullYear() - age <= 59.0) {
        return m2;
    } else if (now.getFullYear() - age >= 60.0 && now.getFullYear() - age <= 69.0) {
        return m3;
    } else if (now.getFullYear() - age >= 70.0) {
        return m4;
    }
};

const AgeCategoryFormulaName = (age: number) => {
    if (now.getFullYear() - age >= 15.0 && now.getFullYear() - age <= 18.0) {
        return 'sj';
    } else if (now.getFullYear() - age >= 19.0 && now.getFullYear() - age <= 23.0) {
        return 'j';
    } else if (now.getFullYear() - age >= 23.0 && now.getFullYear() - age <= 39.0) {
        return 'o';
    } else if (now.getFullYear() - age >= 40.0 && now.getFullYear() - age <= 49.0) {
        return 'm1';
    } else if (now.getFullYear() - age >= 50.0 && now.getFullYear() - age <= 59.0) {
        return 'm2';
    } else if (now.getFullYear() - age >= 60.0 && now.getFullYear() - age <= 69.0) {
        return 'm3';
    } else if (now.getFullYear() - age >= 70.0) {
        return 'm4';
    }
};

export { AgeCategoryFormula, AgeCategoryFormulaName };
