import { RepositoryList } from './components/RepositoryList';
import './styles/global.scss';

export function App(){
    return (
        // permite que tenha mais de um componente e não acrescenta um div
        <>
            <RepositoryList />
            {/* <Counter /> */}
        </>
    );
}