/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { state } = useLocation();
  const [product, setproduct] = useState([]);
  console.log(product);
  const [isloading, setisloading] = useState(true);
  const [error, seterror] = useState("");
  const {
    title,
    price,
    category,
    stock,
    description,
    rating,
    brand,
    weight,
    images,
  } = state;
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setproduct(res.data);
        setisloading(false);
      })
      .catch((err) => {
        seterror(err.message);
        setisloading(false);
      });
  }, []);

  return (
    <div className="product-detail-container">
      {isloading && <p>product details is loading ...</p>}
      {error && <p>{error}</p>}
      {!isloading && !error && (
        <article key={id} className="detail-content">
          <h3>{title}</h3>
          <img src={images[0]} alt={images.title} className="detail-image" />
          <p>
            <strong>price :</strong> {price}
          </p>
          <p>
            <strong>catagory :</strong> {category}
          </p>
          <p>
            <strong>rating :</strong> {rating}
          </p>
          <p>
            <strong>brand :</strong> {brand}
          </p>
          <p>
            <strong>weight :</strong> {weight}gm
          </p>
          <p>
            <strong>stock in :</strong> {stock} pcs
          </p>
          <p>
            <strong>desc : </strong> {description.substring(0, 100)}....
          </p>
        </article>
      )}

      <Link className="link-detail-style" to={`/`}>
        go to back product home
      </Link>
    </div>
  );
};

export default ProductDetails;
