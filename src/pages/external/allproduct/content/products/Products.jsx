import { useEffect, useState } from "react";
import "./Products.scss";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const Products = ({getFilter}) => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [fragrance, setFragrance] = useState([]);
  const [provisions, setProvisions] = useState([]);
  const [cosmetics, setCosmetics] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  



  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = products.slice(startIndex, endIndex);

  function nextPage() {
    setCurrentPage((prev) => prev + 1);
  }

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  }

  function goToPage(pageNumber) {
    setCurrentPage(pageNumber);
  }

  const URL = "https://foltunlad-backend.onrender.com/api/fol";
  const getAllProducts = async () => {
    const { data } = await axios(URL);
    setProducts(data.data);
    setAllProducts(data.data);
  };
  const getLatestProducts = async () => {
    const { data } = await axios(`${URL}/latest`);
    setLatestProducts(data.latestProducts);
  };
  const getProvisionProducts = async () => {
    const { data } = await axios(`${URL}/provisions`);
    setProvisions(data);
  };
  const getFragranceProducts = async () => {
    const { data } = await axios(`${URL}/fragrance`);
    setFragrance(data);
  };
  const getDrinkProducts = async () => {
    const { data } = await axios(`${URL}/winesAndDrinks`);
    setDrinks(data);
  };
  const getCosmeticsProducts = async () => {
    const { data } = await axios(`${URL}/cosmeticsAndToiletries`);
    setCosmetics(data);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchValue = searchParams.get("search");
  if (searchValue) {
    setFilter(searchValue);
  } 
    getAllProducts();
    getLatestProducts();
    getProvisionProducts();
    getFragranceProducts();
    getCosmeticsProducts();
    getDrinkProducts();
  }, []);

  useEffect(() => {
    if (filter === "Provisions") {
      setProducts(provisions);
    } else if (filter === "Cosmetics") {
      setProducts(cosmetics);
    } else if (filter === "Wines") {
      setProducts(drinks);
    } else if (filter === "Fragrances") {
      setProducts(fragrance);
    } else {
      setProducts(allProducts);
    }
    setCurrentPage(1);
    getFilter(filter) 
  }, [filter, allProducts, provisions, cosmetics, drinks, fragrance, getFilter]);

  
  

  return (
    <div className="py-24">
      <div
        className="flex gap-16 md:pl-24 px-4"
        style={{ maxWidth: "1400px", margin: "auto" }}
      >
        <div className="space-y-5 w-[277px] lg:block hidden">
          <div>
            <h2 className=" text-4xl">Category</h2>
            <div className="w-full space-y-5 py-5">
              
                <button
                  className={`${filter === "All" && "text-green-100"} flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                  onClick={() => setFilter("All")}
                >
                  All <span>{allProducts?.length}</span>
                </button>
              
              
                <button
                  className={`${filter === "Provisions" && "text-green-100"} flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                  onClick={() => setFilter("Provisions")}
                >
                  Provision <span>{provisions?.length}</span>
                </button>
             
              
                <button
                  className={`${filter === "Cosmetics" && "text-green-100"} flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                  onClick={() => setFilter("Cosmetics")}
                >
                  Cosmetics & Toiletries <span>{cosmetics?.length}</span>
                </button>
              
              
                <button
                  className={`${filter === "Wines" && "text-green-100"} flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                  onClick={() => setFilter("Wines")}
                >
                  Wine & Drinks <span>{drinks?.length}</span>
                </button>
              
              
                <button
                  className={`${filter === "Fragrances" && "text-green-100"} flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                  onClick={() => setFilter("Fragrances")}
                >
                  Fragrances <span>{fragrance?.length}</span>
                </button>
              
            </div>
          </div>
          <div>
            <h2 className="text-4xl">Best Sellers</h2>

            <div className=" space-y-4 py-5">
              {latestProducts?.map((product) => {
                return (
                  <div key={product._id} className="flex items-center gap-3">
                    <span>
                      <img
                        src={product.image[0]}
                        alt=""
                        className="w-[107px] h-[99px] object-cover rounded-md"
                      />
                    </span>
                    <div className=" font-semibold">
                      <p className=" text-xs font-medium text-gray-300">
                        {product.category}
                      </p>
                      <p className=" text-sm font-medium">
                        {product.productName}
                      </p>
                      <p className="mt-3 text-green-100 font-medium text-base">
                        #{product.amount}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" max-w-[877px]">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-6 gap-x-3">
            {currentItems?.map((product) => {
              const { _id, productName, amount, category, image } = product;

              return (
                <div
                  key={_id}
                  className=" md:w-[282px] sm:w-[200px] w-full  flex flex-col p-5 gap-2 justify-center items-center h-[440px] border-2 border-gray-400 rounded-lg"
                >
                  <p className="self-start font-semibold text-sm text-gray-300">
                    {category}
                  </p>
                  <p className="self-start text-lg">{productName}</p>
                  <div className=" h-64">
                    <img
                      src={image[0]}
                      alt=""
                      className="md:max-w-[241px] w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-[1.5px] bg-gray-400 w-full mx-auto"></div>
                  <p className="mt-3 text-center text-green-100 text-[34px] font-bold">
                    #{amount}
                  </p>
                </div>
              );
            })}
          </div>

          {currentPage >= 1 && (
            <div className="flex gap-5 mt-14 justify-center mx-auto md:w-96 w-60">
              <button
                className="size-[33px] bg-gray-200 text-lg hover:bg-green-200 hover:text-white-100 "
                disabled={nextPage === 1}
                onClick={prevPage}
              >
                &lt;
              </button>
              <button
                className={`${
                  currentPage === 1 && "bg-green-100 text-white-100"
                } size-[33px] bg-gray-200 text-lg hover:bg-green-200 hover:text-white-100`}
                onClick={() => goToPage(1)}
              >
                1
              </button>
              <button
                className={`${
                  currentPage === 2 && "bg-green-100 text-white-100"
                } size-[33px] bg-gray-200 text-lg hover:bg-green-200 hover:text-white-100`}
                onClick={() => goToPage(2)}
              >
                2
              </button>
              <button
                className="size-[33px] bg-gray-200 text-lg hover:bg-green-200 hover:text-white-100 "
                disabled={endIndex >= products.length}
                onClick={nextPage}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
