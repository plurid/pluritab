import React, {
    useState,
    useContext,
    useEffect,
} from 'react';

import {
    StyledTime,
} from './styled';


interface TimeProperties {
}

const Time: React.FC<TimeProperties> = () => {
    // const context: any = useContext(Context);
    // const {
    //     theme,
    //     setTheme,
    // } = context;

    /** state */
    const [currentTime, setCurrentTime] = useState(new Date());


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <StyledTime>
            {currentTime.getHours()}:{currentTime.getMinutes()}:{currentTime.getSeconds()}
        </StyledTime>
    );
}


export default Time;
