import React, {
    useState,
    useEffect,
} from 'react';

import {
    PluridIconRotate,
} from '@plurid/plurid-icons-react';

import {
    StyledCurrentIPContainer,
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
    const [
        showReset,
        setShowReset,
    ] = useState(false);


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


    /** render */
    return (
        <StyledCurrentIPContainer
            onMouseEnter={() => setShowReset(true)}
            onMouseLeave={() => setShowReset(false)}
        >
            {currentIP && (
                <StyledCurrentIP>
                    <div>
                        {currentIP}
                    </div>

                    {showReset && (
                        <div>
                            <PluridIconRotate />
                        </div>
                    )}
                </StyledCurrentIP>
            )}
        </StyledCurrentIPContainer>
    );
}


export default CurrentIP;
