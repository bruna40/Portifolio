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
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        cursor: pointer;
        background-color: ${props => props.theme['pastel-brown']};
        padding: 1rem;
        border-radius: 10px;
        a {
            text-decoration: none;
            color: ${props => props.theme['white']};
            font-size: 1rem;
        }
        
    }

    @media (max-width: 768px) {
        margin-top: 8rem;
        margin-left: 2rem;
        margin-right: 2rem;
        h1 {
            font-size: 2.5rem;
        }
        p {
            font-size: 1.1rem;
        }
        div {
            a {
                font-size: 0.8rem;
            }
        }
    }

`;