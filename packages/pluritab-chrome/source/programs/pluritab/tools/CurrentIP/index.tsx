import React, {
    useState,
    useEffect,
} from 'react';

import {
    StyledCurrentIP,
} from './styled';



interface CurrentIPProperties {
}

const CurrentIP: React.FC<CurrentIPProperties> = () => {

    /** state */
    const [
        currentIP,
        setCurrentIP,
    ] = useState('');


    /** effects */
    useEffect(() => {
        const getIP = async () => {
            try {
                const response = await fetch('https://api.ipify.org?format=json');
                const data = await response.json();
                setCurrentIP(data.ip || '')
            } catch (error) {
                return;
            }
        }

        getIP();
    }, []);

    return (
        <StyledCurrentIP>
            {currentIP && (
                <>
                    {currentIP}
                </>
            )}
        </StyledCurrentIP>
    );
}


export default CurrentIP;
