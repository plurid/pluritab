import styled from 'styled-components';



export const StyledTime: any = styled.div`
    display: grid;
    place-content: center;
    font-size: 4rem;
    text-align: center;
`;


export const StyledTimeText: any = styled.div`
    position: relative;
    min-width: 180px;
`;


export const StyledTimeTextPMAM: any = styled.span`
    font-size: 1.5rem;
    padding: 0 0.5rem;
`;


export const StyledTimeOptions: any = styled.div`
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    display: grid;
    grid-gap: 0.8rem;
    padding: 0 0.3rem;

    font-size: 0.9rem;
    text-align: left;
`;


export const StyledTimSwitch: any = styled.div`
    cursor: pointer;
    user-select: none;
`;
