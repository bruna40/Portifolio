import { HandWaving, FileArrowDown } from "phosphor-react";
import { ContainerHome } from "./style";
import curriculo from "../../Curriculo/BrunaCurriculo.pdf";

export function Home() {
    return (
        <ContainerHome>
            <h1>Oi<span><HandWaving /></span>, Eu sou a Bruna</h1>
            <p>Sou uma estudante de Ciência da Computação apaixonada por tecnologia </p>
            <p> e estou me aventurando no mundo do desenvolvimento web como uma</p>
            <p>desenvolvedora web full stack.</p>
            <div>
                <a href={curriculo} download={true}>Download cv <FileArrowDown  size={25}/></a>
            </div>
        </ContainerHome>
    )
}