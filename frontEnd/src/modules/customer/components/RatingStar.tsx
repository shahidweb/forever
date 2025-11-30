import { Rating } from "react-simple-star-rating";
import { useAppSelector } from "../../../shared/hooks/reduxHooks";
import type { IProduct } from "../../../shared/types/interfaces";

interface IStarProps {
  products: IProduct;
  setRating: (rate: number) => void;
}

function RatingStar({ products, setRating }: IStarProps) {
  const user = useAppSelector((state) => state.auth.user);
  const isCurrentUser = products?.ratings?.some(
    (item) => item.userId === user?.id
  );

  return (
    <div>
      <Rating
        onClick={(rate) => setRating(rate)}
        initialValue={products.rating}
        size={25}
        readonly={isCurrentUser}
        SVGstyle={{ display: "inline-block" }}
        allowFraction={false} // whole-star only
      />
    </div>
  );
}

export default RatingStar;
