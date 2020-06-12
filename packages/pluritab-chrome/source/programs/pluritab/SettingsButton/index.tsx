import React, {
    useState,
} from 'react';

import {
    PluridIconTools,
} from '@plurid/plurid-icons-react';

import {
    StyledSettingsButton,
} from './styled';

import Settings from '../Settings';



interface SettingsButtonProperties {
}

const SettingsButton: React.FC<SettingsButtonProperties> = () => {
    const [
        showSettings,
        setShowSettings,
    ] = useState(false);

    return (
        <StyledSettingsButton>
            <PluridIconTools
                atClick={() => setShowSettings(show => !show)}
                style={{
                    zIndex: 999,
                }}
            />

            {showSettings && (
                <Settings />
            )}
        </StyledSettingsButton>
    );
}


export default SettingsButton;
