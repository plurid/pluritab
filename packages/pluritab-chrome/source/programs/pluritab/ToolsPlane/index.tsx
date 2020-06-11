import React from 'react';

import {
    StyledToolsPlane,
} from './styled';

import Time from '../tools/Time';
import CurrentIP from '../tools/CurrentIP';



interface ToolsPlaneProperties {
}

const ToolsPlane: React.FC<ToolsPlaneProperties> = () => {

    return (
        <StyledToolsPlane>
            <Time />

            <CurrentIP />
        </StyledToolsPlane>
    );
}


export default ToolsPlane;
