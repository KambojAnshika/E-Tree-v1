import React from "react";
import { Link } from "react-router-dom";
import default_product from "../../images/default_product.png";

const HomeBanner = () => {
  return (
    <div>
      {/*========================== HomeBanner ==========================*/}
      <Link to="?keyword=apple">
        <img src={default_product} alt="" />
      </Link>
      {/*======================== HomeBanner end========================*/}
    </div>
  );
};

export default HomeBanner;
