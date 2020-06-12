import styled from 'styled-components';



export const StyledSettingsContainer: any = styled.div`
    /* max-height: 300px; */
    width: 200px;
    overflow: hidden;
    position: absolute;
    bottom: -1rem;
    right: -1rem;
    border-top-left-radius: 20px;
    background: hsla(0, 0%, 0%, 0.5);
`;


export const StyledSettings: any = styled.div`
    overflow: scroll;
    margin: 1rem;
    font-size: 1rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 30px 200px 30px;

    h1 {
        font-size: 1.4rem;
        margin-top: 0;
        margin-bottom: 10px;
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
