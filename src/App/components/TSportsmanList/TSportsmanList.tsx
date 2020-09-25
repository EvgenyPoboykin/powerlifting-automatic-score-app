import React, { memo } from 'react';
import { Container, Wrapper } from './style';
import { ITSportsmanList } from './interfaces';
import TSportsmanItem from '../TSportsmanItem';

const TSportsmanList: React.FC<ITSportsmanList> = memo(({ sportsmans }) => {
    return (
        sportsmans &&
        sportsmans.map((sportsman: any) => (
            <Container key={sportsman.sportsmanid}>
                <Wrapper>
                    <TSportsmanItem sportsman={sportsman} />
                </Wrapper>
            </Container>
        ))
    );
});
export default TSportsmanList;
