import React, {
    useState,
    useContext,
    useEffect,
} from 'react';

import themes from '@plurid/plurid-themes';

import {
    PluridApplication,
    PluridPlane,
} from '@plurid/plurid-react';

import {
    graphql,
} from '@plurid/plurid-functions';

import Context from '../../context';

import {
    StyledNewTab,
} from './styled';

import Time from '../Time';

import {
    chromeStorage,
} from '../../../../services/utilities';

import client from '../../../../services/graphql/client';
import {
    CURRENT_OWNER,
} from '../../../../services/graphql/query';
import {
    LOGOUT,
} from '../../../../services/graphql/mutate';



interface NewTabProperties {
}

const NewTab: React.FC<NewTabProperties> = () => {
    // const context: any = useContext(Context);
    // const {
    //     theme,
    //     setTheme,
    // } = context;

    const planes: PluridPlane[] = [
        {
            path: '/',
            component: {
                kind: 'react',
                element: () => (
                    <div>
                        <Time />
                    </div>
                ),
            },
        },
    ];

    return (
        <StyledNewTab
            // theme={theme}
        >
            <PluridApplication
                planes={planes}
                view={[
                    '/',
                ]}
            />
        </StyledNewTab>
    );
}


export default NewTab;
