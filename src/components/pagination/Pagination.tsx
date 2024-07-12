import products from "./mockData.json";
import Card from "../../common/Card";
import "./pagination.css";
import { useEffect, useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = () => {
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [selectedPage, setSelectedPage] = useState<number>(0);

  const [paginationNumbers, setPaginationNumbers] = useState<number[]>([]);

  useEffect(() => {
    const paginationArr = [];
    const range = Math.ceil(products.length / rowsPerPage);

    for (let index = 0; index < range; index++) {
      paginationArr.push(index);
    }
    if (selectedPage >= range) {
      setSelectedPage(paginationArr.length - 1);
    }
    setPaginationNumbers(paginationArr);
  }, [products, rowsPerPage]);

  const handlePageClick = (page: number) => {
    setSelectedPage(page);
  };

  console.log(
    selectedPage * rowsPerPage,
    selectedPage * rowsPerPage + rowsPerPage,
    ["LOGGING"]
  );

  return (
    <>
      <h1>List of Products</h1>
      <div className="gridContainer">
        {products
          .slice(
            selectedPage * rowsPerPage,
            selectedPage * rowsPerPage + rowsPerPage
          )
          .map((product, index) => {
            return (
              <div className="gridItem">
                <Card
                  key={index}
                  title={product.title}
                  body={
                    <>
                      <div
                        style={{
                          height: "250px",
                          backgroundImage: `url(${product.image})`,
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      ></div>
                      <span>Price :- {product.price}</span>
                    </>
                  }
                  actions={
                    <>
                      <span>Rating:- {product.rating.rate}</span>
                      <span>Product Count:- {product.id}</span>
                    </>
                  }
                />
              </div>
            );
          })}
      </div>

      <div className="pagination">
        <select
          value={rowsPerPage}
          onChange={(e: any) => setRowsPerPage(Number(e.target.value))}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span
          className="pagination-item"
          onClick={() => setSelectedPage(selectedPage - 1)}
          style={{ display: selectedPage === 0 ? "none" : "inline" }}
        >
          <BsArrowLeft />
        </span>
        {paginationNumbers.map((page: number) => {
          return (
            <span
              className={
                selectedPage === page
                  ? "pagination-item-selected"
                  : "pagination-item"
              }
              onClick={() => handlePageClick(page)}
            >
              {page + 1}
            </span>
          );
        })}
        <span
          className="pagination-item"
          onClick={() => setSelectedPage(selectedPage + 1)}
          style={{
            display:
              selectedPage === paginationNumbers.length - 1 ? "none" : "inline",
          }}
        >
          <BsArrowRight />
        </span>
      </div>
    </>
  );
};

export default Pagination;
