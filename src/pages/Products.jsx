import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // Pagination
  const itemsPerPage = 12;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  //search term

  const [searchTerm, setsearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setsearchTerm(event.target.value);
    setCurrentPage(1);
  };

  // sorting systeming

  const handleSortchange = (event) => {
    setsortCriteria(event.target.value);
  };

  const [sortCriteria, setsortCriteria] = useState("");

  // const filterproducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  useEffect(() => {
    setIsLoading(true); // Set loading to true whenever the page changes
    console.log(`Current Page: ${currentPage}`);
    let url = `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
      (currentPage - 1) * itemsPerPage
    }`;
    if (searchTerm !== "") {
      url = `https://dummyjson.com/products/search?q=${searchTerm}&limit=${itemsPerPage}&skip=${
        (currentPage - 1) * itemsPerPage
      }`;
    }
    if (sortCriteria) {
      const splitesortCriteria = sortCriteria.split("-");
      url += `&sortBy=${splitesortCriteria[0]}&order=${splitesortCriteria[1]} `;
    }
    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        setIsLoading(false);
        const totalItems = res.data.total;
        const pages = Math.ceil(totalItems / itemsPerPage);
        setTotalPages(pages);
        console.log(`Total Pages: ${pages}`);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [currentPage, searchTerm, sortCriteria]);

  // const handlePageChange = (index) => {
  //   setCurrentPage(index + 1);
  // };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getVisiblePageNumbers = () => {
    const visiblePages = 5;
    const pages = [];
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);

    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="products-container">
      <h1>Products Section</h1>
      <div className="routing-sections">
        <input
          id="inputss"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search holder ...."
        />
        <select
          name="select"
          id="select"
          value={sortCriteria}
          onChange={handleSortchange}
        >
          <option value="">Sort By : </option>
          <option value="title-asc">Title : A to z</option>
          <option value="title-desc">Title : Z to A</option>
          <option value="price-asc">Price : low to high</option>
          <option value="price-desc">Price : high to low</option>
          <option value="rating-asc">rating : low to high</option>
          <option value="rating-desc">rating : high to low</option>
        </select>
      </div>
      <>
        <section className="products">
          {isLoading && <p>Loading product data...</p>}
          {error && <p>{error}</p>}
          {products &&
            products.length > 0 &&
            products.map((product) => {
              const { id, title, images, description, category, price } =
                product;
              return (
                <article key={id} className="product">
                  <h3>{title}</h3>
                  <img src={images[0]} alt={title} className="product-image" />
                  <p>{price}</p>
                  <p>{category}</p>
                  <p>{description.substring(0, 100)}....</p>
                  <Link
                    className="products-link"
                    to={`/products/${id}`}
                    state={product}
                  >
                    Show Details
                  </Link>
                </article>
              );
            })}
        </section>
        <div className="pagination">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="pagination-button"
          >
            Previous
          </button>

          {getVisiblePageNumbers().map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              className={`pagination-button ${
                currentPage === page ? "active" : ""
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="pagination-button"
          >
            Next
          </button>
        </div>
      </>
    </div>
  );
};

export default Products;
