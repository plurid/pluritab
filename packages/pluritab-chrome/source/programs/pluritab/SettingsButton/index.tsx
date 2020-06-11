import React from 'react';

import {
    PluridIconTools,
} from '@plurid/plurid-icons-react';

import {
    StyledSettingsButton,
} from './styled';



interface SettingsButtonProperties {
}

const SettingsButton: React.FC<SettingsButtonProperties> = () => {

    return (
        <StyledSettingsButton>
            <PluridIconTools />
        </StyledSettingsButton>
    );
}


export default SettingsButton;
