import styled from 'styled-components';



export const StyledTime: any = styled.div`
    display: grid;
    place-content: center;
    font-size: 4rem;

    font-family: Ubuntu, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    min-height: 400px;
    text-align: center;
`;


export const StyledTimeText: any = styled.div`
    position: relative;
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