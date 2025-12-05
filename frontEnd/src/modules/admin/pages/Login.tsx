import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { loginUser } from "../../../services/authServices";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../shared/hooks/reduxHooks";

type Inputs = {
  email: string;
  password: string;
  name: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { error } = useAppSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    dispatch(loginUser(data)).then((res: any) => {
      if (res.meta.requestStatus === "fulfilled") {
        navigate("/admin");
      }
      reset();
    });
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <HeadingBanner title={"Welcome to Admin Login"} subtitle="" />
        </div>
        {error && <p className="text-red-500">{error}</p>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              {...register("email", { required: true })}
              placeholder="Email"
              className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black"
            />
            {errors.email && (
              <span className="text-red-600">This field is required.</span>
            )}
          </div>

          <div>
            <input
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
              className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black"
            />
            {errors.password && (
              <span className="text-red-600">This field is required.</span>
            )}
          </div>
          <div className="text-end text-sm text-gray-500">
            <span
              onClick={() => navigate("/")}
              className="text-center cursor-pointer hover:text-black"
            >
              Customer Login
            </span>
          </div>

          <div className="text-center">
            <Button value="Sign In" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
