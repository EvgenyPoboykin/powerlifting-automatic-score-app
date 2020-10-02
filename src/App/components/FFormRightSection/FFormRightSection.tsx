import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import { IFFormRightSection } from './interfaces';
import FFormSection from '../FFormSection';
import FInput from '../FInput';
import { ContextApp } from '../../state';
import FTitle from '../FTitle';

const FFormRightSection: React.FC<IFFormRightSection> = memo(() => {
    const {
        event: { pss, gsl, ts, four, five },
        languages: {
            form: { squat, bench_press, dead_lift },
        },
    } = useContext(ContextApp);
    return (
        <FFormSection>
            <Container>
                {pss ? (
                    <>
                        <FTitle name={squat} />
                        <Content>
                            <FInput nameField='sq_weight_1' placeholder='T1' type='float' />
                            <FInput nameField='sq_weight_2' placeholder='T2' type='float' />
                            <FInput nameField='sq_weight_3' placeholder='T3' type='float' />
                            <FInput nameField='sq_weight_4' placeholder='T4' type='float' disable={four} />
                            <FInput nameField='sq_weight_5' placeholder='T5' type='float' disable={five} />
                        </Content>
                    </>
                ) : null}
                {gsl ? (
                    <>
                        <FTitle name={bench_press} />
                        <Content>
                            <FInput nameField='bp_weight_1' placeholder='T1' type='float' />
                            <FInput nameField='bp_weight_2' placeholder='T2' type='float' />
                            <FInput nameField='bp_weight_3' placeholder='T3' type='float' />
                            <FInput nameField='bp_weight_4' placeholder='T4' type='float' disable={four} />
                            <FInput nameField='bp_weight_5' placeholder='T5' type='float' disable={five} />
                        </Content>
                    </>
                ) : null}
                {ts ? (
                    <>
                        <FTitle name={dead_lift} />
                        <Content>
                            <FInput nameField='dl_weight_1' placeholder='T1' type='float' />
                            <FInput nameField='dl_weight_2' placeholder='T2' type='float' />
                            <FInput nameField='dl_weight_3' placeholder='T3' type='float' />
                            <FInput nameField='dl_weight_4' placeholder='T4' type='float' disable={four} />
                            <FInput nameField='dl_weight_5' placeholder='T5' type='float' disable={five} />
                        </Content>
                    </>
                ) : null}
            </Container>
        </FFormSection>
    );
});
export default FFormRightSection;
