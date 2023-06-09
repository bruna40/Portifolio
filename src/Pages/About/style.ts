import { styled } from "styled-components";


export const ContainerAbout = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;


    @media (max-width: 768px) {
        margin-top: 4rem;
        margin-left: 2rem;
        margin-right: 2rem;

    }


`;

export const ContainerSpan = styled.span`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 3rem;
        font-weight: 700;
        color: ${props => props.theme['pastel-brown']};
    }

    p {
        font-size: 2rem;
        color: ${props => props.theme['pastel-brown']};
        
    }

    @media (max-width: 768px) {
        h1 {
            font-size: 2rem;
        }   
        p {
            font-size: 1rem;
        }
    }
    
`;

export const ContainerText = styled.article`

    display: flex;
    flex-direction: column;
    align-items: start;
    
    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme['pastel-brown']};

    }


    p {
        margin-top: 0.5rem;
        font-size: 1rem;
        color: ${props => props.theme['coffe']};
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 1rem;
        }
        p {
            font-size: 0.8rem;
        }   
    }


`;

export const ContainerSkill = styled.span`
    display: flex;
    flex-direction: column;
    align-items: start;



    padding: 2rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    

    h2 {
        font-size: 1.5rem;
        color: ${props => props.theme['pastel-brown']};

    }

    div {
        display: flex;
        flex-direction: row;

        p {
            background-color: ${props => props.theme['pastel-brown']};
            padding: 0.5rem;
            border-radius: 0.5rem;
            margin-top: 0.5rem;
            margin-right: 0.5rem;
            font-size: 1rem;
            color: ${props => props.theme['white']};
        }
    }
    
    @media (max-width: 768px) {
        h2 {
            font-size: 1rem;
        }
        div {
            p {
                font-size: 0.8rem;
            }
        }
    }
`;