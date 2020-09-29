const weightCategoryFormula = (weight: number, gender: string, value: string) => {
    if (
        value === 'IPF-Classic' ||
        value === 'IPF-Classic-Bench' ||
        value === 'IPF-Classic-Equipped' ||
        value === 'IPF-Classic-Bench-Equipped'
    ) {
        if (gender === 'MEN') {
            if (weight <= 53.0) {
                return 53;
            } else if (weight >= 53.1 && weight <= 59.0) {
                return 59;
            } else if (weight >= 59.1 && weight <= 66.0) {
                return 66;
            } else if (weight >= 66.1 && weight <= 74.0) {
                return 74;
            } else if (weight >= 74.1 && weight <= 83.0) {
                return 83;
            } else if (weight >= 83.1 && weight <= 93.0) {
                return 93;
            } else if (weight >= 93.1 && weight <= 105.0) {
                return 105;
            } else if (weight >= 105.1 && weight <= 120.0) {
                return 120;
            } else if (weight >= 120.1) {
                return '120+';
            }
        } else {
            if (weight <= 43.0) {
                return 43;
            } else if (weight >= 43.1 && weight <= 47.0) {
                return 47;
            } else if (weight >= 47.1 && weight <= 52.0) {
                return 52;
            } else if (weight >= 52.1 && weight <= 57.0) {
                return 57;
            } else if (weight >= 57.1 && weight <= 63.0) {
                return 63;
            } else if (weight >= 63.1 && weight <= 72.0) {
                return 72;
            } else if (weight >= 72.1 && weight <= 84.0) {
                return 84;
            } else if (weight >= 84.1) {
                return '84+';
            }
        }
    } else {
        if (gender === 'MEN') {
            if (weight <= 52.0) {
                return 52;
            } else if (weight >= 52.1 && weight <= 56.0) {
                return 56;
            } else if (weight >= 56.1 && weight <= 60.0) {
                return 60;
            } else if (weight >= 60.1 && weight <= 67.5) {
                return 67.5;
            } else if (weight >= 67.6 && weight <= 75.0) {
                return 75;
            } else if (weight >= 75.1 && weight <= 82.5) {
                return 82.5;
            } else if (weight >= 82.6 && weight <= 90.0) {
                return 90;
            } else if (weight >= 90.1 && weight <= 100.0) {
                return 100;
            } else if (weight >= 100.1 && weight <= 110.0) {
                return 110;
            } else if (weight >= 110.1 && weight <= 125.0) {
                return 125;
            } else if (weight >= 125.1 && weight <= 140.0) {
                return 100;
            } else if (weight >= 140.1) {
                return '140+';
            }
        } else {
            if (weight <= 44.0) {
                return 44;
            } else if (weight >= 44.1 && weight <= 48.0) {
                return 48;
            } else if (weight >= 48.1 && weight <= 52.0) {
                return 52;
            } else if (weight >= 52.1 && weight <= 56.0) {
                return 56;
            } else if (weight >= 56.1 && weight <= 60.0) {
                return 60;
            } else if (weight >= 60.1 && weight <= 67.5) {
                return 67.5;
            } else if (weight >= 67.51 && weight <= 75.0) {
                return 75;
            } else if (weight >= 75.1 && weight <= 82.5) {
                return 82.5;
            } else if (weight >= 82.51 && weight <= 90.0) {
                return 90;
            } else if (weight >= 90.1) {
                return '90+';
            }
        }
    }
};

export default weightCategoryFormula;
