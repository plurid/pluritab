import React from 'react';
import themes from '@plurid/plurid-themes';

import Context from './context';

import Options from './containers/Options';

import {
    chromeStorage,
} from '../../services/utilities';



class App extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            theme: themes.depict,
            setTheme: this.setTheme,
        };
    }

    async componentDidMount() {
        const { theme } = await chromeStorage.get('theme');

        const selectedTheme = (themes as any)[theme];

        if (theme) {
            this.setState({
                theme: selectedTheme,
            });
        }
    }

    public render() {
        return (
            <Context.Provider value={this.state}>
                <Options />
            </Context.Provider>
        );
    }

    private setTheme = async (theme: string) => {
        this.setState({
            theme: (themes as any)[theme],
        });

        await chromeStorage.set({theme});
    }
}


export default App;
