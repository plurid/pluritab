import styled from 'styled-components';



export const StyledPluritab: any = styled.div`
    background-color: ${(props: any) => {
        return props.theme.backgroundColorPrimary;
    }};
    color: ${(props: any) => {
        return props.theme.colorPrimary;
    }};
`;
