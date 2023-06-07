import { Link } from "react-router-dom";
import { ContainerContato } from "./style";

export function Contact() {
    return (
        <ContainerContato>
            <Link to="https://github.com/bruna40">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
            </Link>
            <Link to="https://www.linkedin.com/in/bruna-santiago-/">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" />
            </Link>
        </ContainerContato>
    )
}