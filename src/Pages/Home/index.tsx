import { HandWaving, FileArrowDown } from "phosphor-react";
import { ContainerHome, LinkCv } from "./style";
import curriculo from "../../Curriculo/CurriculoBrunaDevFullStack.pdf";

export function Home() {
    return (
        <ContainerHome>
            <h1>Oi<span><HandWaving /></span>, Eu sou a Bruna</h1>
            <p>Sou desenvolvedora Full Stack, apaixonada por tecnologia e por tudo que </p>
            <p>envolve programação.Atualmente sou estudante de Ciências da Computação,</p>
            <p>faço trabalho voluntário como desenvolvedora.</p>
            <LinkCv>
                <a href={curriculo} download={true}>Download cv <FileArrowDown  size={25}/></a>
            </LinkCv>
        </ContainerHome>
    )
}