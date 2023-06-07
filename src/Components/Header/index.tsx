import { NavLink } from "react-router-dom";
import { ContainerHeader, ContainerImg } from "./style";

export function Header() {
    return (
        <ContainerHeader>
            <ContainerImg>
                <img src="https://avatars.githubusercontent.com/u/62550730?v=4" alt="Foto Perfil" />
                <h5>Bruna Santiago</h5>
            </ContainerImg>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">Sobre</NavLink>
                <NavLink to="/projects">Projetos</NavLink>
                <NavLink to="/contact">Contato</NavLink>
            </nav>
        </ContainerHeader>
    )
}