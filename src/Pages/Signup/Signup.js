import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../Contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const [signUpError, setSignUpError] = useState("");
  const { createUser, googleLogin, loading, updateUser } =
    useContext(AuthContext);
    const [newUserEmail, setNewUserEmail] = useState('');
    const [token] = useToken(newUserEmail);
    const navigate = useNavigate();
  
    if(token){
      navigate("/");
    }
  
    const handleRegister = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User created successfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUserToDb(data.name, data.email, data.role);
          })
          .catch((err) => console.error(err));
      })
      .catch((error) => setSignUpError(error.message));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const saveUserToDb = (name, email, role) => {
    const user = { name: name, email: email, role: role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewUserEmail(email);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div
          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full lg:w-1/3 mx-auto">
      <div className="hero-content gap-20  flex-col lg:flex-row py-20">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center pt-5">Sign Up</h1>
          <form
            onSubmit={handleSubmit(handleRegister)}
            className="card-body pb-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Name is required",
                })}
                placeholder="Your Name"
                className="input input-bordered"
              />
              {errors.name && (
                <p className="text-red-500">{errors?.name.message}</p>
              )}
            </div>
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
           <div className="form-control"> 
           <label className="label">
                <span className="label-text">Choose type</span>
              </label>
            <select {...register("role")} className="select select-bordered w-full max-w-xs">
            <option value="seller">Seller</option>
              <option value="buyer">Buyer</option>
            </select>
           </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
              <p className="text-center mt-3">or,</p>
            </div>
            {signUpError && <p className="text-red-500">{signUpError}</p>}
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
            Already have an acount?{" "}
            <Link className="text-orange-600 font-bold" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
