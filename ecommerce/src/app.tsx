import { useRoutes } from 'react-router-dom';
import { routes } from './routes';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'; //debugger

const App = () => {
    const element = useRoutes(routes);
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {element}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;
