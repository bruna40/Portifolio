import styled from 'styled-components';

export const ContainerHome = styled.main`
   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 15rem;
    margin-left: 10rem;
    margin-right: 10rem;

    h1 {
        font-size: 5rem;
        color: ${props => props.theme['pastel-brown']};
    }

    p {
        font-size: 1.5rem;
        color: ${props => props.theme['pastel-brown']};

    }
`;