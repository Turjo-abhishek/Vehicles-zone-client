import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { Login, googleLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const [loginUser, setLoginUser] = useState('');
    // const [token] = useToken(loginUser);
  
    const from = location?.state?.from?.pathname || "/";
  
    // if(token){
    //   navigate(from, {replace: true});
    // }

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const handleLogin = (data) => {
        setLoginError("");
        Login(data.email, data.password)
          .then((result) => {
            const user = result.user;
            setLoginUser(user.email);
            
          })
          .catch((error) => {
            setLoginError(error.message);
          });
      };

      const handleGoogleLogin = () => {
        googleLogin()
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
          .catch((error) => console.error(error));
      };

  return (
    <div className="w-full lg:w-1/3 mx-auto">
      <div className="hero-content gap-20  flex-col lg:flex-row py-20">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center pt-5">Login</h1>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="card-body pb-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", {
                  required: "Email is required",
                })}
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <p className="text-red-500">{errors?.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be 6 characters or long",
                  },
                })}
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <p className="text-red-500">{errors?.password.message}</p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Login"
              />
              <p className="text-center mt-3">or,</p>
            </div>
            {loginError && <p className="text-red-500">{loginError}</p>}
          </form>
          <div className="mx-auto mb-3">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline btn-primary"
            >
              <FaGoogle className="mr-2"></FaGoogle>
              Sign in With Google
            </button>
          </div>
          <p className="text-center pb-5">
            New to this Website?{" "}
            <Link className="text-orange-600 font-bold" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
