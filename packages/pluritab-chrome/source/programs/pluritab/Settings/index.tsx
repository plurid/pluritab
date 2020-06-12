import React, {
    useContext,
} from 'react';

import {
    PluridSwitch,
} from '@plurid/plurid-ui-react';

import {
    StyledSettings,
    StyledSettingsContainer,
} from './styled';

import Context from '../context';



interface SettingsProperties {
}

const Settings: React.FC<SettingsProperties> = () => {
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
        <StyledSettingsContainer>
            <StyledSettings>
                <div>
                    <h1>
                        tools
                    </h1>
                </div>

                <div
                    style={{
                        overflow: 'scroll',
                    }}
                >
                    <ul>
                        <li>
                            <div>
                                color picker
                            </div>

                            <PluridSwitch
                                checked={colorPicker}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                converter
                            </div>

                            <PluridSwitch
                                checked={converter}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                current ip
                            </div>

                            <PluridSwitch
                                checked={currentIP}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                desearcher
                            </div>

                            <PluridSwitch
                                checked={desearcher}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                notes
                            </div>

                            <PluridSwitch
                                checked={notes}
                                atChange={() => {}}
                            />
                        </li>

                        <li>
                            <div>
                                time
                            </div>

                            <PluridSwitch
                                checked={time}
                                atChange={() => {}}
                            />
                        </li>
                    </ul>
                </div>

                <div>

                </div>
            </StyledSettings>
        </StyledSettingsContainer>
    );
}


export default Settings;
