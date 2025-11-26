import { useEffect, useState } from "react";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { fetchAllProductList } from "../../../services/productServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { bannerData } from "../../../shared/types/constant";
import type { IProduct } from "../../../shared/types/interfaces";
import Banner from "../components/Banner";
import Loader from "../components/Loader";
import PolicySection from "../components/PolicySection";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [seller, setSeller] = useState<IProduct[]>([]);
  const { loading, error, data } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.length) {
      setProducts(data);
      setSeller(data.filter((_, i) => i % 2 == 0));
    } else {
      dispatch(fetchAllProductList());
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <h2 className="text-red-500 text-center">{error}</h2>;


  return (
    <div className="p-8">
      <Banner {...bannerData} />
      <div className="max-w-7xl mx-auto">
        <HeadingBanner
          title="Latest"
          subtitle="Collections"
          description="Lorem ipsum is simply dummay text of the printing and typesetting industry."
        />
        <ProductList items={products} />
      </div>
      <div className="pt-10"></div>
      <div className="max-w-7xl mx-auto">
        <HeadingBanner
          title="Best"
          subtitle="Sellers"
          description="Lorem ipsum is simply dummay text of the printing and typesetting industry."
        />
        <ProductList items={seller} />
      </div>
      <PolicySection />
    </div>
  );
}

export default Home;
