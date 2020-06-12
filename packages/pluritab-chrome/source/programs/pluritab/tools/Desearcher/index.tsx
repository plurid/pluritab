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
    /** state */
    const [
        desearchValue,
        setDesearchValue,
    ] = useState('')


    return (
        <StyledDesearcher>
            <PluridTextline
                text={desearchValue}
                atChange={(event: any) => setDesearchValue(event.target.value)}
                level={1}
                placeholder="desearch"
            />
        </StyledDesearcher>
    );
}


export default Desearcher;
