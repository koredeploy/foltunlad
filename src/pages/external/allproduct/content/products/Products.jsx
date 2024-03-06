import { useEffect, useState, useContext } from "react";
import "./Products.scss";
import ProductContext from "../../../../../context/ProductContext";

// eslint-disable-next-line react/prop-types
const Products = ({ getFilter }) => {
  const {
    allProducts,
    latestProduct,
    provisions,
    fragrance,
    wineAndDrinks,
    cosmeticsAndToiletries,
  } = useContext(ProductContext);
  
  const [products, setProducts] = useState([]);
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

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const searchValue = searchParams.get("search");
    if (searchValue) {
      setFilter(searchValue);
    }
  }, []);

  useEffect(() => {
    if (filter === "Provisions") {
      setProducts(provisions);
    } else if (filter === "Cosmetics") {
      setProducts(cosmeticsAndToiletries);
    } else if (filter === "Wines") {
      setProducts(wineAndDrinks);
    } else if (filter === "Fragrances") {
      setProducts(fragrance);
    } else {
      setProducts(allProducts);
    }
    setCurrentPage(1);
    getFilter(filter);
  }, [
    filter,
    allProducts,
    provisions,
    cosmeticsAndToiletries,
    wineAndDrinks,
    fragrance,
    getFilter,
  ]);

  return (
    <div className="py-24">
      <div
        className="flex gap-14   w-11/12 mx-auto"
        style={{ maxWidth: "1400px", margin: "auto" }}
      >
        <div className="space-y-5 w-[277px] lg:block hidden">
          <div className="w-full">
            <h2 className=" text-4xl">Category</h2>
            <div className="w-full space-y-5 py-5">
              <button
                className={`${
                  filter === "All" && "text-green-100"
                } flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                onClick={() => setFilter("All")}
              >
                All <span>{allProducts?.length}</span>
              </button>

              <button
                className={`${
                  filter === "Provisions" && "text-green-100"
                } flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                onClick={() => setFilter("Provisions")}
              >
                Provision <span>{provisions?.length}</span>
              </button>

              <button
                className={`${
                  filter === "Cosmetics" && "text-green-100"
                } flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                onClick={() => setFilter("Cosmetics")}
              >
                Cosmetics & Toiletries{" "}
                <span>{cosmeticsAndToiletries?.length}</span>
              </button>

              <button
                className={`${
                  filter === "Wines" && "text-green-100"
                } flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                onClick={() => setFilter("Wines")}
              >
                Wine & Drinks <span>{wineAndDrinks?.length}</span>
              </button>

              <button
                className={`${
                  filter === "Fragrances" && "text-green-100"
                } flex w-full justify-between cursor-pointer text-xl hover:text-green-100 focus:text-green-100`}
                onClick={() => setFilter("Fragrances")}
              >
                Fragrances <span>{fragrance?.length}</span>
              </button>
            </div>
          </div>
          <div>
            <h2 className="text-4xl">Best Sellers</h2>

            <div className=" space-y-4 py-5">
              {latestProduct?.map((product) => {
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

        <div className="w-11/12 mx-auto ">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
            {currentItems?.map((product) => {
              const { _id, productName, amount, category, image } = product;

              return (
                <div
                  key={_id}
                  className="flex flex-col border border-gray-300 rounded-lg p-4 items-center justify-between h-[355px] md:h-[360px] xl:h-[400px] lg:max-w-[280px] xl:max-w-[350px]"
                >
                  <p className="self-start font-semibold text-sm text-gray-300">
                    {category}
                  </p>
                  <p className="self-start text-lg">{productName}</p>
                  <div className=" h-60 flex justify-center items-center">
                    <div className="my-2 max-w-[180px] max-h-[160px] min-h-[160px] min-w-[160px]  md:max-w-[200px] md:max-h-[230px] lg:max-w-[210px] ">
                      <img
                        className="object-cover w-full h-48 "
                        src={image[0]}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="h-[0.5px] bg-gray-300 w-full mx-auto"></div>
                  <p className="mt-3 text-center text-green-100 big-text font-bold">
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
