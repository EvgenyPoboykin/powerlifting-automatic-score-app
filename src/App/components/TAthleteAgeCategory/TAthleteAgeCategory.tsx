import React, { memo } from 'react';
import { Container, Icon } from './style';
import { ITAthleteAgeCategory } from './interfaces';
import { AgeCategoryFormula } from './logic';

import sj from './images/sj.svg';
import j from './images/j.svg';
import o from './images/o.svg';
import m1 from './images/m1.svg';
import m2 from './images/m2.svg';
import m3 from './images/m3.svg';
import m4 from './images/m4.svg';

const TAthleteAgeCategory: React.FC<ITAthleteAgeCategory> = memo(({ age }) => {
    return (
        <Container>
            <Icon src={AgeCategoryFormula(age, sj, j, o, m1, m2, m3, m4)} />
        </Container>
    );
});
export default TAthleteAgeCategory;
