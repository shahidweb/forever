import { useEffect, useMemo, useState } from "react";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import SortDropdown from "../../../components/ui/SortDropdown";
import { fetchAllProductList } from "../../../services/productServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { SortOptionId, sortOptions } from "../../../shared/types/constant";
import type { IProduct } from "../../../shared/types/interfaces";
import FilterPanel from "../components/Filters";
import ProductList from "../components/ProductList";

function Collections() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filterProducts, setFilterProducts] = useState<IProduct[]>([]);
  const [sortOption, setSortOption] = useState<string>("Relevant");
  const [filters, setFilters] = useState<{
    categories: string[];
    types: string[];
  }>({
    categories: [],
    types: [],
  });
  const { loading, error, data } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data?.length) {
      setProducts(data);
    } else {
      dispatch(fetchAllProductList());
    }
  }, [data]);

  useMemo(() => {
    if (products.length) {
      setFilterProducts(products);
    }
  }, [products]);

  const sortProducts = (products: IProduct[]) => {
    let sortProducts = products;
    switch (sortOption) {
      case SortOptionId.LOW_HIGH:
        sortProducts.sort((a, b) => a.price - b.price);
        break;

      case SortOptionId.HIGH_LOW:
        sortProducts.sort((a, b) => b.price - a.price);
        break;

      case SortOptionId.NEWEST:
        // sortProducts.sort((a, b) => b._id - a._id);
        break;

      default:
        sortProducts = [...products];
    }
    return sortProducts;
  };

  useMemo(() => {
    const sortData = sortProducts(products);
    const filterData = sortData.filter(
      (product) =>
        (filters.categories.length === 0 ||
          filters.categories.includes(product.category)) &&
        (filters.types.length === 0 || filters.types.includes(product.type))
    );
    setFilterProducts(filterData);
  }, [sortOption, filters]);

  return (
    <div className="pt-10 max-w-7xl mx-auto">
      <div className="flex grid-cols-2 gap-2 justify-between">
        {/* <div className="w-3xs"> */}
        <FilterPanel
          onChangeFilter={(categories: string[], types: string[]) =>
            setFilters({ categories, types })
          }
        />
        {/* </div> */}
        <div>
          <div className="flex justify-between">
            <HeadingBanner title="All" subtitle="Collections" />
            <div>
              <SortDropdown
                options={sortOptions}
                label="Sort by"
                onSelect={(option) => setSortOption(option.id)}
              />
            </div>
          </div>
          <ProductList items={filterProducts} />
        </div>
      </div>
    </div>
  );
}

export default Collections;
