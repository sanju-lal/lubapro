import React from "react";

import Products1 from "../../../components/pages/landing/Products1";

const card2 = {
  titleBefore: "STREAMLINE YOUR",
  highlight: "MANUFACTURING",
  titleAfter: "",
  para: [
    "Manage production, planning, and costs — for any manufacturing mode — with Lubapro.",
  ],
  image: "/assets/product-page1.jpeg",
};

const IndexPage = () => {
  return (
    <div>
      <Products1 item={card2} />
    </div>
  );
};

export default IndexPage;
