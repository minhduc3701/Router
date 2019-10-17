import React from "react";
import { NavLink, Route } from "react-router-dom";
import Productx from "./Product";

class Products extends React.Component {
  render() {
    let products = [
      {
        id: 1,
        slug: "iphone",
        name: "iPhone X",
        price: 999
      },
      {
        id: 2,
        slug: "ipad",
        name: "iPad Mini",
        price: 799
      },
      {
        id: 3,
        slug: "samsung",
        name: "Sam Sung S10 Plus",
        price: 1099
      }
    ];

    let { match } = this.props;
    let url = match.url;

    let result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`}>
          <li className="list-group-item">
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      );
    });

    let { location } = this.props;
    console.log(location);

    return (
      <div className="container">
        <h1>Danh Sách Sản Phẩm</h1>

        <div className="row">
          <ul className="list-group">{result}</ul>
        </div>

        <div className="row">
          <Route path="/products/:slug" component={Productx}></Route>
        </div>
      </div>
    );
  }
}

export default Products;
