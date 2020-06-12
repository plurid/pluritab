import React, {
    useContext,
} from 'react';

import {
    StyledToolsPlane,
} from './styled';

import Time from '../tools/Time';
import Desearcher from '../tools/Desearcher';
import CurrentIP from '../tools/CurrentIP';

import SettingsButton from '../SettingsButton';

import Context from '../context';



interface ToolsPlaneProperties {
}

const ToolsPlane: React.FC<ToolsPlaneProperties> = () => {
    /** context */
    const context = useContext(Context);

    if (!context) {
        return (
            <></>
        );
    }

    const {
        tools,
    } = context;

    const {
        colorPicker,
        converter,
        currentIP,
        desearcher,
        notes,
        time,
    } = tools;


    /** render */
    return (
        <StyledToolsPlane>
            <div>
                {time && (
                    <Time />
                )}

                {desearcher && (
                    <Desearcher />
                )}

                {currentIP && (
                    <CurrentIP />
                )}
            </div>

            <SettingsButton />
        </StyledToolsPlane>
    );
}


export default ToolsPlane;
