import styled from 'styled-components';



export const StyledSettingsContainer: any = styled.div`
    max-height: 300px;
    width: 200px;
    overflow: scroll;
    padding-bottom: 1rem;

    position: absolute;
    bottom: -1rem;
    right: -1rem;
    border-top-left-radius: 20px;
    background: hsla(0, 0%, 0%, 0.5);
`;


export const StyledSettings: any = styled.div`
    overflow: scroll;
    margin: 1rem;
    margin-bottom: 2rem;
    font-size: 1rem;

    h1 {
        font-size: 1.4rem;
        margin-bottom: 1.5rem;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 1rem;
        display: grid;
        grid-template-columns: auto 60px;
        align-items: center;
    }
`;
