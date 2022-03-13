import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
    const element = useRoutes(routes);
    return (
        <>
            <h3>hi</h3>
        </>
    );
    // const element = useRoutes(routes);
    // return element;
};

export default App;
