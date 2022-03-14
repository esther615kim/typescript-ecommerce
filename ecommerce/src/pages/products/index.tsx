import axios from 'axios';
import { useQuery } from 'react-query';

const ProductList = () => {
    const { isLoading, error, data } = useQuery('products', () => {
        axios('https://fakestoreapi.com/products');
        console.log('fetched?');
    });

    console.log(data);

    return <div>List!</div>;
};

export default ProductList;
