import React from 'react';

import {
    StyledSettings,
} from './styled';



interface SettingsProperties {
}

const Settings: React.FC<SettingsProperties> = () => {

    return (
        <StyledSettings>
            <div>
                <h1>
                    tools
                </h1>
            </div>

            <div>
                <div>
                    desearcher
                </div>

                <div>
                    color picker
                </div>

                <div>
                    converter
                </div>

                <div>
                    current ip
                </div>

                <div>
                    notes
                </div>

                <div>
                    time
                </div>
            </div>
        </StyledSettings>
    );
}


export default Settings;
