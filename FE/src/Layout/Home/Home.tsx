import BannerComponent from "../../Component/HomeComponent/BannerComponent";
import New from "../../Component/HomeComponent/New";

import ProductWithCategories from "../../Component/HomeComponent/ProductWithCategories";

const Home: React.FC = () => {
  return (
    <>
      <main className="main">
        <BannerComponent />

        <ProductWithCategories />

        <New />
      </main>
    </>
  );
};

export default Home;
