import styled from 'styled-components';

export const ContainerContato = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15rem;
    img {
        width: 10rem;
        margin: 2.5rem 2.5rem 2.5rem 2.5rem;

        &:hover {
            transform: scale(1.1);
        } 
    }
    

    @media (max-width: 768px) {
        margin-top: 8rem;
        img {
            width: 5rem;
            margin: 1rem 1rem 1rem 1rem;
        }
    }

`;