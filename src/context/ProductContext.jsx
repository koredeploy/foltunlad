import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {
    const baseUrl = import.meta.env.VITE_REACT_APP_API_URL;

    const [latestProduct, setLatestProduct] = useState([]);
    const [provisions, setProvisions] = useState([])
    const [cosmeticsAndToiletries, setCosmeticsAndToiletries] = useState([])
    const [wineAndDrinks, setWineAndDrinks] = useState([])
    const [fragrance, setFragrance] = useState([])

    useEffect(() => {
        getLatestProduct();
        getProvisions();
        getCosmeticsAndToiletries();
        getFragrance()
        getWineAndDrinks()
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    const getLatestProduct = async () => {
        try {
            const res = await axios.get(`${baseUrl}/latest`);
            setLatestProduct(res.data);
            
        } catch (error) {
            console.log(error);
        }
    };

    const getProvisions = async () => {
        try {
            const res = await axios.get(`${baseUrl}/provisions`);
            setProvisions(res.data)
            
        } catch (error) {
            console.log(error);
        }
    };

    const getCosmeticsAndToiletries = async () => {
        try {
            const res = await axios.get(`${baseUrl}/cosmeticsAndToiletries`);
            setCosmeticsAndToiletries(res.data)
            
        } catch (error) {
            console.log(error);
        }
    };
    const getWineAndDrinks = async () => {
        try {
            const res = await axios.get(`${baseUrl}/winesAndDrinks`);
            setWineAndDrinks(res.data)
        } catch (error) {
            console.log(error);
        }
    };
    const getFragrance = async () => {
        try {
            const res = await axios.get(`${baseUrl}/fragrance`);
            setFragrance(res.data)
        } catch (error) {
            console.log(error);
        }
    };

    const ProductData = {
        latestProduct,
        provisions,
        wineAndDrinks,
        cosmeticsAndToiletries,
        fragrance,
    };

    return (
        <ProductContext.Provider value={ProductData}>
            {children}
        </ProductContext.Provider>
    );
};
