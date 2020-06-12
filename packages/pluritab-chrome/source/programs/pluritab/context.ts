import React from 'react';

import {
    Theme,
} from '@plurid/plurid-themes';



export interface IContext {
    theme: Theme;
    setTheme: any;
    tools: {
        colorPicker: boolean;
        converter: boolean;
        currentIP: boolean;
        desearcher: boolean;
        notes: boolean;
        time: boolean;
    };
}


const Context = React.createContext<IContext | null>(null);


export default Context;
