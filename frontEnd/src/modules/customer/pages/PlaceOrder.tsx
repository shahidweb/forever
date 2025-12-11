import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { placeOrder } from "../../../services/orderServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";
import { cartTotalCal } from "../../../shared/utils/cartCal";
import { handleRazorpayPayment } from "../../../shared/utils/razorPayment";
import CartTotal from "../components/CartTotal";
import { clearAll } from "../../../store/slices/cartSlice";

const PlaceOrder: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { register, handleSubmit, control, reset } = useForm();
  const { items } = useAppSelector((state) => state.cart);

  const onSubmit = async (data: any) => {
    const { paymentMethod } = data;
    delete data.paymentMethod;
    if (items && items.length == 0) return;

    const updated = cartTotalCal(items);
    let payload: any = {
      address: data,
      paymentMethod,
      ...updated,
    };

    if (paymentMethod === "stripe") {
      console.log("stripe");
    } else if (paymentMethod === "razorpay") {
      const res: any = await handleRazorpayPayment(updated.total);
      payload = {
        ...payload,
        paymentInfo: { ...res },
      };
      console.log(payload);
    } else {
      console.log("cod");
    }
    dispatch(placeOrder(payload)).then((res: any) => {
      if (res.meta.requestStatus === "fulfilled") {
        dispatch(clearAll());
        navigate("/orders");
        reset();
      }
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <HeadingBanner title="DELIVERY" subtitle="INFORMATION" />
      <form onSubmit={handleSubmit(onSubmit)} tabIndex={0}>
        <div className="flex flex-wrap justify-between pt-8 mb-8">
          <div className="w-1/2 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("firstName", { required: true })}
                type="text"
                placeholder="First Name"
                className="border rounded-md p-3 w-full"
              />
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last Name"
                className="border rounded-md p-3 w-full"
              />
            </div>

            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="Email address"
              className="border rounded-md p-3 w-full"
            />

            <input
              {...register("street", { required: true })}
              type="text"
              placeholder="Street"
              className="border rounded-md p-3 w-full"
            />

            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("city", { required: true })}
                type="text"
                placeholder="City"
                className="border rounded-md p-3 w-full"
              />
              <input
                {...register("state", { required: true })}
                type="text"
                placeholder="State"
                className="border rounded-md p-3 w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <input
                {...register("zipcode", { required: true })}
                type="text"
                placeholder="Zipcode"
                className="border rounded-md p-3 w-full"
              />
              <input
                {...register("country", { required: true })}
                type="text"
                placeholder="Country"
                className="border rounded-md p-3 w-full"
              />
            </div>

            <input
              {...register("phone", { required: true })}
              type="text"
              placeholder="Phone"
              className="border rounded-md p-3 w-full"
            />
            {/* <Button value="Submit" /> */}
          </div>
          <CartTotal isPaymentShow={true} control={control} />
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
