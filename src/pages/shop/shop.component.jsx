import React, { Component } from "react";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";

import SHOP_DATA from "./shop.data.js";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview id={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
