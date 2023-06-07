import styled from 'styled-components';

export const ContainerHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;

    background-color: ${props => props.theme['white-coffe']};

    nav {
        display: flex;
        gap:1rem;
        margin-right: 20px;
        a {
            text-decoration: none;
            color: ${props => props.theme['pastel-brown']};
            font-size: 1rem;

            &:hover {
                color: ${props => props.theme['coffe']};
            }

            &.active {
                color: ${props => props.theme['coffe']};
            }
            
        }
    }
`;

export const ContainerImg = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    img {
        width: 50px;
        border-radius: 50%;
        margin-right: 10px;
    }
    h5 {
        font-size: 1rem;
        color: ${props => props.theme['pastel-brown']};
    }

`;