import React, {
    // useContext,
    useState,
    useEffect,
} from 'react';

import {
    StyledTime,
    StyledTimeText,
    StyledTimeOptions,
    StyledTimSwitch,
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
    const [
        currentTime,
        setCurrentTime,
    ] = useState(new Date());
    const [
        mouseOver,
        setMouseOver,
    ] = useState(false);
    const [
        show24H,
        setShow24H,
    ] = useState(true);


    /** effects */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => {
            clearInterval(interval);
        }
    }, []);


    /** render */
    const renderHour = () => {
        if (show24H) {
            return (
                <>
                    {currentTime.getHours()}
                </>
            );
        }

        return (
            <>
                {currentTime.getHours()}
            </>
        );
    }

    return (
        <StyledTime
            onMouseEnter={() => {
                setCurrentTime(new Date());
            }}
        >
            <StyledTimeText
                onMouseEnter={() => setMouseOver(true)}
                onMouseLeave={() => setMouseOver(false)}
            >
                <div>
                    {renderHour()}:{currentTime.getMinutes()}
                </div>

                {/* {mouseOver && ( */}
                    <StyledTimeOptions>
                        <div>
                            {show24H && (
                                <StyledTimSwitch
                                    onClick={() => setShow24H(false)}
                                >
                                    24H
                                </StyledTimSwitch>
                            )}
                            {!show24H && (
                                <StyledTimSwitch
                                    onClick={() => setShow24H(true)}
                                >
                                    12H
                                </StyledTimSwitch>
                            )}
                        </div>

                        <div>
                            world
                        </div>
                    </StyledTimeOptions>
                {/* )} */}
            </StyledTimeText>
        </StyledTime>
    );
}


export default Time;
