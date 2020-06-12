import React from 'react';

import {
    StyledToolsPlane,
} from './styled';

import Time from '../tools/Time';
import Desearcher from '../tools/Desearcher';
import CurrentIP from '../tools/CurrentIP';

import SettingsButton from '../SettingsButton';



interface ToolsPlaneProperties {
}

const ToolsPlane: React.FC<ToolsPlaneProperties> = () => {

    return (
        <StyledToolsPlane>
            <div>
                <Time />

                <Desearcher />

                <CurrentIP />
            </div>

            <SettingsButton />
        </StyledToolsPlane>
    );
}


export default ToolsPlane;
