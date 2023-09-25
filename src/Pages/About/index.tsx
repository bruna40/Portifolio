import { skills } from "../../Services/skills";
import { ContainerAbout, ContainerText, ContainerSkill, ContainerSpan } from "./style";

export function About() {
    return (
        <ContainerAbout>
            <ContainerSpan>
                <h1>SOBRE MIM</h1>
                <p>Aqui você encontrara informação sobre mim, o que eu faço, e minhas habilidades </p>
                <p>em programação e tecnologia.</p>
            </ContainerSpan>
            <div>
                <ContainerText>
                    <h2>QUEM SOU EU?</h2>
                    <div>
                        <p>Sou estudante de Ciências da Computação e estou buscando uma oportunidade para iniciar minha carreira na área de desenvolvimento de software. Atualmente, conclui um bootcamp da Trybe de desenvolvimento web full stack, onde tenho aprendido diversas habilidades e competências técnicas, metodologias ágeis , Clean Code e TDD.</p>
                        <p>Ao longo do bootcamp, desenvolvi habilidades em HTML, CSS, JavaScript, TypeScript, React, Node, Teste, Git, Linux, Redux, Styled Components, SQL, NOSQL, Python, Docker, SCSS. Estou sempre em busca de novos desafios e aprendizados para aprimorar ainda mais minhas habilidades e me tornar um profissional completo.</p>
                        <p>Estou aberta a oportunidades de emprego, onde eu possa contribuir, aprender e crescer.</p>
                    </div>
                    
                </ContainerText>
                
                <ContainerSkill>
                    <h2>MINHAS HABILIDADES</h2>
                    <div>
                        {
                            skills.map((skill, index) => {
                                return(
                                    <div key={index}>
                                        <p>{skill}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </ContainerSkill>
            </div>
        </ContainerAbout>

    )
}