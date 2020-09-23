import React, { memo, useContext } from 'react';
import { Container, Content } from './style';
import { IFFormRightSection } from './interfaces';
import FFormSection from '../FFormSection';
import FInput from '../FInput';
import { ContextApp } from '../../state';

const FFormRightSection: React.FC<IFFormRightSection> = memo(() => {
    const { event } = useContext(ContextApp);
    return (
        <FFormSection>
            <Container>
                <Content>
                    <FInput nameField='sq_weight_1' placeholder='T1' type='float' />
                    <FInput nameField='sq_weight_2' placeholder='T2' type='float' />
                    <FInput nameField='sq_weight_3' placeholder='T3' type='float' />
                    <FInput nameField='sq_weight_4' placeholder='T4' type='float' disable={event.four} />
                    <FInput nameField='sq_weight_5' placeholder='T5' type='float' disable={event.five} />
                </Content>
                <Content>
                    <FInput nameField='bp_weight_1' placeholder='T1' type='float' />
                    <FInput nameField='bp_weight_2' placeholder='T2' type='float' />
                    <FInput nameField='bp_weight_3' placeholder='T3' type='float' />
                    <FInput nameField='bp_weight_4' placeholder='T4' type='float' disable={event.four} />
                    <FInput nameField='bp_weight_5' placeholder='T5' type='float' disable={event.five} />
                </Content>
                <Content>
                    <FInput nameField='dl_weight_1' placeholder='T1' type='float' />
                    <FInput nameField='dl_weight_2' placeholder='T2' type='float' />
                    <FInput nameField='dl_weight_3' placeholder='T3' type='float' />
                    <FInput nameField='dl_weight_4' placeholder='T4' type='float' disable={event.four} />
                    <FInput nameField='dl_weight_5' placeholder='T5' type='float' disable={event.five} />
                </Content>
            </Container>
        </FFormSection>
    );
});
export default FFormRightSection;
