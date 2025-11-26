import { Rating } from "react-simple-star-rating";

interface IStarProps {
  rating: number;
  setRating: (rate: number) => void;
}

function RatingStar({ rating, setRating }: IStarProps) {
  return (
    <div>
      <Rating
        onClick={(rate) => setRating(rate)}
        initialValue={rating}
        size={25}
        readonly={rating > 0}
        SVGstyle={{ display: "inline-block" }}
        allowFraction={false} // whole-star only
      />
    </div>
  );
}

export default RatingStar;
