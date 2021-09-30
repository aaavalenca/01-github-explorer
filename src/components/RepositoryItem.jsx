// com props, a gente importa o que quer que passamos como propriedade
// lá quando chamamos a função no componente-pai 
// <RepositoryItem repository={repository}/>
// então, props.repository chama repository. Outro ponto, chama o que tem dentro
// de repository
export function RepositoryItem(props){
    return (
        <li>
            {/* ?? = caso a propriedade esteja vazia, substitua pelo que segue */}
            <strong>{props.repository.name ?? 'Default rep name'}</strong>
            <p>{props.repository?.description}</p>
            <a href = {props.repository?.html_url} >
                Acessar repositório
            </a>
        </li>
    );
}