import React, {
    useState,
    useEffect,
} from 'react';

import {
    StyledTime,
    StyledTimeText,
    StyledTimeTextPMAM,
    StyledTimeOptions,
    StyledTimSwitch,
} from './styled';




function formatDate(
    date: any,
    format: any,
    utc?: any,
) {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(
        i: any,
        len?: any,
    ) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
};


const renderTimeFunction = (
    timeShape: string,
    currentTime: Date,
) => {
    if (timeShape === '24H') {
        return (
            <>
                {formatDate(currentTime, 'HH:mm')}
            </>
        );
    }

    if (timeShape === 'UNX') {
        return (
            <>
                {Math.floor(currentTime.getTime() / 1000)}
            </>
        );
    }

    return (
        <>
            {formatDate(currentTime, 'h:mm')}

            <StyledTimeTextPMAM>
                {formatDate(currentTime, 'TT')}
            </StyledTimeTextPMAM>
        </>
    );
}


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
        timeShape,
        setTimeShape,
    ] = useState('24H');
    const [
        renderTime,
        setRenderTime,
    ] = useState(
        renderTimeFunction(
            timeShape,
            currentTime,
        ),
    );


    /** effects */
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 60000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    useEffect(() => {
        setRenderTime(
            renderTimeFunction(
                timeShape,
                currentTime,
            ),
        );
    }, [
        timeShape,
        currentTime,
    ]);


    /** render */
    let timeSelectRender = (<></>);
    switch (timeShape) {
        case '24H':
            timeSelectRender = (
                <StyledTimSwitch
                    onClick={() => setTimeShape('12H')}
                >
                    24H
                </StyledTimSwitch>
            );
            break;
        case '12H':
            timeSelectRender = (
                <StyledTimSwitch
                    onClick={() => setTimeShape('UNX')}
                >
                    12H
                </StyledTimSwitch>
            );
            break;
        case 'UNX':
            timeSelectRender = (
                <StyledTimSwitch
                    onClick={() => setTimeShape('24H')}
                >
                    UNX
                </StyledTimSwitch>
            );
            break;
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
                    {renderTime}
                </div>

                {mouseOver && (
                    <StyledTimeOptions>
                        <div>
                            {timeSelectRender}
                        </div>

                        <div>
                            world
                        </div>
                    </StyledTimeOptions>
                )}
            </StyledTimeText>
        </StyledTime>
    );
}


export default Time;
