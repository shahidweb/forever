import HeadingBanner from "../../../components/ui/HeadingBanner";
import CartTotal from "../components/CartTotal";

const PlaceOrder: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between pt-8">
      <div className="w-1/2">
        <HeadingBanner title="DELIVERY" subtitle="INFORMATION" />
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border rounded-md p-3 w-full"
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            className="border rounded-md p-3 w-full"
          />

          <input
            type="text"
            placeholder="Street"
            className="border rounded-md p-3 w-full"
          />

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="City"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="State"
              className="border rounded-md p-3 w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Zipcode"
              className="border rounded-md p-3 w-full"
            />
            <input
              type="text"
              placeholder="Country"
              className="border rounded-md p-3 w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Phone"
            className="border rounded-md p-3 w-full"
          />
        </form>
      </div>

      {/* RIGHT — CART TOTALS + PAYMENT METHOD */}
      <CartTotal isPaymentShow={true} />
    </div>
  );
};

export default PlaceOrder;
