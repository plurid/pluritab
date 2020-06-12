import React from 'react';

import {
    PluridSwitch,
} from '@plurid/plurid-ui-react';

import {
    StyledSettings,
    StyledSettingsContainer,
} from './styled';



interface SettingsProperties {
}

const Settings: React.FC<SettingsProperties> = () => {

    return (
        <StyledSettingsContainer>
            <StyledSettings>
                <div>
                    <h1>
                        tools
                    </h1>
                </div>

                <div>
                    <ul>
                        <li>
                            <div>
                                desearcher
                            </div>

                            <PluridSwitch
                                checked={false}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                color picker
                            </div>

                            <PluridSwitch
                                checked={false}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                converter
                            </div>

                            <PluridSwitch
                                checked={false}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                current ip
                            </div>

                            <PluridSwitch
                                checked={false}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                notes
                            </div>

                            <PluridSwitch
                                checked={false}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                time
                            </div>

                            <PluridSwitch
                                checked={false}
                                atChange={() => {}}
                            />
                        </li>
                    </ul>
                </div>
            </StyledSettings>
        </StyledSettingsContainer>
    );
}


export default Settings;
