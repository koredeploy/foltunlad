import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const ProductContext = createContext();

export default ProductContext;

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
    const apiUrl = import.meta.env.VITE_REACT_APP_API_URL;
    // console.log(apiUrl);

    const [allProducts, setAllProducts] = useState([])
    const [latestProduct, setLatestProduct] = useState([]);
    const [provisions, setProvisions] = useState([]);
    const [cosmeticsAndToiletries, setCosmeticsAndToiletries] = useState([]);
    const [wineAndDrinks, setWineAndDrinks] = useState([]);
    const [fragrance, setFragrance] = useState([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false)

    

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [AllRes,latestRes, provisionsRes, cosmeticsAndToiletriesRes, wineAndDrinksRes, fragranceRes] = await Promise.all([
                    axios.get(apiUrl),
                    axios.get(`${apiUrl}/latest`),
                    axios.get(`${apiUrl}/provisions`),
                    axios.get(`${apiUrl}/cosmeticsAndToiletries`),
                    axios.get(`${apiUrl}/winesAndDrinks`),
                    axios.get(`${apiUrl}/fragrance`)
                ]);
                setAllProducts(AllRes.data.data)
                setLatestProduct(latestRes.data.latestProducts);
                setProvisions(provisionsRes.data);
                setCosmeticsAndToiletries(cosmeticsAndToiletriesRes.data);
                setWineAndDrinks(wineAndDrinksRes.data);
                setFragrance(fragranceRes.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]); 

    const ProductData = {
        allProducts,
        latestProduct,
        provisions,
        wineAndDrinks,
        cosmeticsAndToiletries,
        fragrance,
        loading,
        open,
        setOpen,
    };
    // console.log(latestProduct);
    // console.log(provisions);

    return (
        <ProductContext.Provider value={ProductData}>
            {children}
        </ProductContext.Provider>
    );
};
