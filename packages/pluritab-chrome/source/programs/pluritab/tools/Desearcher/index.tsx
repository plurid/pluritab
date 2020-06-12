import React, {
    useState,
    useEffect,
} from 'react';

import {
    PluridTextline,
} from '@plurid/plurid-ui-react';

import {
    StyledDesearcher,
} from './styled';



interface DesearcherProperties {
}

const Desearcher: React.FC<DesearcherProperties> = () => {

    return (
        <StyledDesearcher>
            <PluridTextline
                text=""
                atChange={() => {}}
                level={1}
            />
        </StyledDesearcher>
    );
}


export default Desearcher;
