import React from "react";

import Products1 from "../../../components/pages/landing/Products1";
import WhyChooseLubapro from "../../../components/pages/landing/WhyChooseLubapro";

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
      <WhyChooseLubapro/>
    </div>
  );
};

export default IndexPage;
