
import { Link } from "react-router-dom";
import { ContainerHeader, ContainerImg, ListaMenu, ContainerMenu } from "./style";
import menu from "./menu.svg"

export function Header() {


    return (
        <ContainerHeader>
            
            <ContainerMenu>
                <input type="checkbox" id="check" />
                <label htmlFor="check">
                    <span>
                        <img src={menu} alt="Menu" />
                    </span>
                </label>
                <ListaMenu className="lista-menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/projects">Projetos</Link></li>
                    <li><Link to="/contact">Contato</Link></li>
                </ListaMenu>
            </ContainerMenu>
            <ContainerImg>
                <img src="https://avatars.githubusercontent.com/u/62550730?v=4" alt="Foto Perfil" />
                <h5>Bruna Santiago</h5>
            </ContainerImg>
        </ContainerHeader>
    );
}