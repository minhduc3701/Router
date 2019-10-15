import React from "react";
import { NavLink } from "react-router-dom";

class Products extends React.Component {
  render() {
    let products = [
      {
        id: 1,
        name: "iPhone X",
        price: 999
      },
      {
        id: 2,
        name: "iPad Mini",
        price: 799
      },
      {
        id: 3,
        name: "Sam Sung S10 Plus",
        price: 1099
      }
    ];

    let { match } = this.props;
    console.log(match);

    let result = products.map((product, index) => {
      return (
        <NavLink key={index} to="">
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });
    return (
      <div className="container">
        <h1>Danh Sách Sản Phẩm</h1>

        <div className="row">
          <ul className="list-group">{result}</ul>
        </div>
      </div>
    );
  }
}

export default Products;
