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

export const ContainerGit = styled.a`
    align-items: center;
    background-color: ${props => props.theme['pastel-brown']};
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    padding: 2rem;

    
        
    text-decoration: none;
    color: ${props => props.theme['white']};

    h2 {
        font-size: 1rem;
        color: ${props => props.theme['white']};
    }
    span {
        font-size: 1rem;
        color: ${props => props.theme['white']};
        margin-top: 1rem;
        padding: 0 1rem;
        text-align: center;

        p {
            margin-top: 0.5rem;
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