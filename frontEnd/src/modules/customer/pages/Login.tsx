import { useEffect, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import HeadingBanner from "../../../components/ui/HeadingBanner";
import { loginUser, registerUser } from "../../../services/authServices";
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
  const { loading, error } = useAppSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const apiAction = isLogin ? loginUser(data) : registerUser(data);
    dispatch(apiAction).then((res: any) => {
      if (res.meta.requestStatus === "fulfilled") {
        isLogin ? setIsLogin(!isLogin) : navigate("/");
      }
      reset();
    });
  };

  useEffect(() => {
    reset();
  }, [isLogin]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <HeadingBanner title={isLogin ? "Login" : "Sign Up"} subtitle="" />
        </div>
        {error && <p className="text-red-500">{error}</p>}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {!isLogin && (
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Name"
                className="w-full p-3 border border-gray-400 rounded-sm focus:outline-none focus:border-black"
              />
              {errors.name && (
                <span className="text-red-600">This field is required.</span>
              )}
            </div>
          )}
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

          {/* Links under password */}
          <div className="flex justify-between text-sm text-gray-500">
            <Link to="/forgot-password" className="hover:text-black">
              Forgot your password?
            </Link>
            <span
              className="text-center cursor-pointer hover:text-black"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Create account" : "Login Here"}
            </span>
          </div>
          <div className="text-center">
            <Button
              value={isLogin ? (loading ? "Loading..." : "Sign In") : "Sign Up"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
