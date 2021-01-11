import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrderLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './style.css';
import { OrderLocationData, Product } from './types';

function Orders(){

    const [products, setProducts] = useState<Product[]>([]);
    const [orderLocation, setOrderLoation] = useState<OrderLocationData>();

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error));
            
    }, []);

    return (
        <div className="orders-container">
            <StepsHeader/>
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLoation(location)} />
        </div>
    )
}

export default Orders;