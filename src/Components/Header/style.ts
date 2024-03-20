import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
    height: 4rem;
    padding: 0.5rem;
    
    background-color: ${props => props.theme['white-coffe']};

    div {
        display: flex;
        align-items: center;
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    img {
            display: none;
    }

    h5 {
        font-size: 1rem;
        color: ${props => props.theme['pastel-brown']};
    }

    @media (min-width: 768px) {
        img {
            width: 3.125rem;
            border-radius: 50%;
            margin-right: 10px;
            display: block;
        }
        h5 {
            font-size: 1.2rem;
        }
    }

`;

export const ContainerMenu = styled.div`
    input {
        display: none;
        &:checked ~ ul {
            display: block;
        }
    }
    span {
        width: 1.5rem;
        height: 1.5rem;
        background-repeat: no-repeat;
        background-position: center;
        display: inline-block;
        
        img#bg {
            width: 1rem;
            padding: 1rem;
        }
    }

    @media (min-width: 768px) {
        span img {
            display: none;
        }
    }
`;

export const ListaMenu = styled.ul`
    display: none;
    position: absolute;
    top: 100%;
    width: 100%;
    right: auto;
    li {
        padding: 1rem;
        background-color: ${props => props.theme['white-coffe']};
        list-style: none;
        
        text-transform: uppercase;
        a {

            color: ${props => props.theme['pastel-brown']};

            &:hover {
                color: ${props => props.theme['coffe']};
            }
        }
    }

    @media (min-width: 768px) {
        display: flex;
        position: static;
        width: auto;
        li {
            padding: 0;
            margin: 0 1rem;
        }
    }
`