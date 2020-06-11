import React from 'react';

import {
    StyledToolsPlane,
} from './styled';

import Time from '../tools/Time';
import CurrentIP from '../tools/CurrentIP';

import SettingsButton from '../SettingsButton';



interface ToolsPlaneProperties {
}

const ToolsPlane: React.FC<ToolsPlaneProperties> = () => {

    return (
        <StyledToolsPlane>
            <div>
                <Time />

                <CurrentIP />
            </div>

            <SettingsButton />
        </StyledToolsPlane>
    );
}


export default ToolsPlane;
