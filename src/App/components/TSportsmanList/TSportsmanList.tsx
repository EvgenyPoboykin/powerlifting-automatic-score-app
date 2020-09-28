import React, { memo } from 'react';
import {} from './style';
import { ITSportsmanList } from './interfaces';

import TTableItem from '../TTableItem';

const TSportsmanList: React.FC<ITSportsmanList> = memo(({ sportsmans }) => {
    return (
        sportsmans &&
        sportsmans.map((sportsman: any) => <TTableItem key={sportsman.sportsmanid} sportsman={sportsman} />)
    );
});
export default TSportsmanList;
