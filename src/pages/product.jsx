import React, { useState } from "react";
import img1 from "./../assets/img1.png";
import img2 from "./../assets/img2.png";
import "./Product.css";

export const Product = () => {
  const [activeSize, setActiveSize] = useState("M");
  const [activeColor, setActiveColor] = useState("color1");
  let [quant, setQuant] = useState(1);

  const sneakerImages = [
    {
      id: "color1",
      primary: "#A29596",
      src: img1,
    },
    {
      id: "color2",
      primary: "#111111",
      src: img2,
    },
  ];

  const sizes = ["S", "M", "L", "XL"];

  const handleSizeClick = (size) => {
    setActiveSize(size);
  };

  const handleColorClick = (colorId, primary) => {
    setActiveColor(colorId);
    document.documentElement.style.setProperty("--primary", primary);
  };

  const increase = () => {
    setQuant((prevQuant) => prevQuant + 1);
  };

  const decrease = () => {
    setQuant((prevQuant) => (prevQuant > 1 ? prevQuant - 1 : 1));
  };
  return (
    <section className="home grid">
      {/* Sneaker Image */}
      <div className="sneaker">
        <span className="sneaker__figure"></span>

        {sneakerImages.map((img) => (
          <img
            key={img.id}
            src={img.src}
            alt="Sneaker"
            className={`sneaker__img ${activeColor === img.id ? "shows" : ""}`}
            color={img.id}
          />
        ))}

        <div className="sneaker__colors">
          {sneakerImages.map((img) => (
            <span
              key={img.id}
              className={`sneaker__color ${
                activeColor === img.id ? "active" : ""
              }`}
              style={{ backgroundColor: img.primary }}
              onClick={() => handleColorClick(img.id, img.primary)}
            ></span>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="info">
        <div className="data">
          <h2 className="data__subtitle">Product Name</h2>
          <h1 className="data__title">Sneaker X</h1>
          <p className="data__description">
            Premium comfort and modern style in one.
          </p>
        </div>

        {/* Sizes */}
        <div className="actions">
          <div>
            <h3 className="size__title">Size</h3>
            <div className="size__content">
              {sizes.map((size) => (
                <span
                  key={size}
                  className={`size__tallas ${
                    activeSize === size ? "active" : ""
                  }`}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="quantity__title">Qty</h3>
            <div className="quantity__content">
              <span
                onClick={() => {
                  decrease();
                }}
              >
                -
              </span>
              <span>{quant}</span>
              <span
                onClick={() => {
                  increase();
                }}
              >
                +
              </span>
            </div>
          </div>
        </div>

        {/* Price */}
        <div className="price">
          <h3 className="price__title">$120</h3>
          <button className="price__button">Add to Cart</button>
        </div>
      </div>
    </section>
  );
};
