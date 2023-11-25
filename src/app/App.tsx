import { MainPage } from 'pages/Main';
import { Providers } from './providers/Providers';
import './styles/index.scss';

const App: React.FC = () => {
    return (
        <Providers>
            <MainPage />
        </Providers>
    );
};

export default App;
