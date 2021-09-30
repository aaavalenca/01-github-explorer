import { useState, useEffect } from "react";
import { RepositoryItem } from "./RepositoryItem";
import '../styles/repositories.scss';

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])

    // useEffect(() => {}, []) ---- que função você quer executar, quando você quer executar

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
            // quando o fetch devolver a página (a resposta), a gente converte para json 
            .then(response => response.json())
            // quando a resposta terminar de ser convertida para json, teremos os dados
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            <ul>
                {/*para cada repository em repositories, retorne um RepositoryItem cujo
                atributo repository é o repository em repositories que estamos mapeando*/}
                {repositories.map(repository => {
                    // joga {repository} dentro de repository e pode ser acessado lá em RepositoryItem, com props
                    return  <RepositoryItem key={repository.id} repository={repository}/>
                })}
            </ul>
        </section>
    )
}