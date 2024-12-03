import React from "react";
import CategoryList from "../components/CategoryList";
import BannerProduct from "../components/BannerProduct";
import VerticalCardProduct from "../components/VerticalCardProduct";
const Home = () => {
  return (
    <div>
      <BannerProduct />
      <CategoryList />
      <div className="divide-y divide-slate-200">
        <VerticalCardProduct category={"pc"} heading={"PC Bán Chạy"} />
        <VerticalCardProduct category={"laptop"} heading={"Laptop Gaming"} />
        <VerticalCardProduct category={"mouse"} heading={"Chuột"} />
        <VerticalCardProduct category={"keyboard"} heading={"Bàn Phím"} />

        <VerticalCardProduct category={"watch"} heading={"Màn Hình"} />
        <VerticalCardProduct category={"phukien"} heading={"Phụ Kiện"} />
      </div>
    </div>
  );
};

export default Home;
