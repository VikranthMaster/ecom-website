import "./Home.css";
import myimage from "./../assets/img.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const products = [
    {
      id: 1,
      title: "Nike Air Jordan",
      price: "$99",
      desc: "Nike Air Jordan FootWear basketball sneakers",
      img: myimage,
    },
    {
      id: 2,
      title: "Nike Air Jordan",
      price: "$99",
      desc: "Nike Air Jordan FootWear basketball sneakers",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Nike Air Jordan",
      price: "$99",
      desc: "Nike Air Jordan FootWear basketball sneakers",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Nike Air Jordan",
      price: "$99",
      desc: "Nike Air Jordan FootWear basketball sneakers",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Nike Air Jordan",
      price: "$99",
      desc: "Nike Air Jordan FootWear basketball sneakers",
      img: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Nike Air Jordan",
      price: "$99",
      desc: "Nike Air Jordan FootWear basketball sneakers",
      img: "img.png",
    },
  ];

  return (
    <div className="container" style={{ marginTop: "10rem" }}>
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={myimage} alt="" className="card-img" />
          <div className="card-data">
            <h1 className="card-title">{product.title}</h1>
            <span className="card-price">{product.price}</span>
            <div className="card-desc">{product.desc}</div>
            <Link to="/product" className="card-button">
              Buy Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
