import React from "react";

class Product extends React.Component {
  render() {
    let { match } = this.props;
    let name = match.params.slug;
    console.log(name);
    return <h1>Chi Tiết sản phẩm: {name}</h1>;
  }
}

export default Product;
