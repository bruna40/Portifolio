import styled from 'styled-components';

export const ContainerProjects = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: ${props => props.theme['pastel-brown']};
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }
    }

`;

export const ContainerGit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;

    h2 {
        font-size: 2rem;

        color: ${props => props.theme['pastel-brown']};
    }
    span {
        font-size: 1rem;
        color: ${props => props.theme['pastel-brown']};
        margin-top: 1rem;
        padding: 0 1rem;
        text-align: center;


        a {
            font-size: 1rem;
            text-decoration: none;
            color: ${props => props.theme['coffe']};

        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1.5rem;
        }
        span {
            font-size: 0.8rem;
        }
    }

`;