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


    /** handlers */
    const getIP = async () => {
        try {
            const response = await fetch('https://api.ipify.org?format=json');
            const data = await response.json();
            setCurrentIP(data.ip || '')
        } catch (error) {
            return;
        }
    }


    /** effects */
    useEffect(() => {
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
                            <PluridIconRotate
                                atClick={() => getIP()}
                            />
                        </div>
                    )}
                </StyledCurrentIP>
            )}
        </StyledCurrentIPContainer>
    );
}


export default CurrentIP;
