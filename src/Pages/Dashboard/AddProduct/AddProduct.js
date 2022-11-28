import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_secret_key;

  const handleAddProduct = (data) => {
    const formdata = new FormData();

    const mobile = data.mobile;
    const location = data.location;
    const name = data.name;
    const resale_price = data.resale_price;
    const original_price = data.original_price;
    const year_of_purchase = data.year_of_purchase;
    const years_used = data.years_used;
    const condition = data.condition;
    const category_id = data.category_name;
    const description = data.description;

    
    formdata.append("image", data.image[0]);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formdata,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
            const newProductInfo = {
                seller_name: user?.displayName,
                seller_email: user?.email,
                mobile,
                location,
                name,
                resale_price,
                original_price,
                year_of_purchase,
                years_used,
                condition,
                category_id,
                description,
                image:imgdata.data.url
              };


          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newProductInfo),
          })
            .then((res) => res.json())
            .then((data) => {
                toast.success("product added successfully");
                navigate("/dashboard/myproducts");
            })
            .catch((err) => console.error(err));
        }
      });
  };

  return (
    <div className="w-full lg:w-2/3 mx-auto">
      <div className="hero-content gap-20  flex-col lg:flex-row py-20">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center pt-5">Add a Product</h1>
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="card-body pb-4"
          >
            <div className="flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Phone</span>
                </label>
                <input
                  type="text"
                  {...register("mobile", {
                    required: "phone number is required",
                  })}
                  placeholder="Seller phone number"
                  className="input input-bordered"
                  required
                />
                {errors.mobile && (
                  <p className="text-red-500">{errors?.mobile.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Seller Location</span>
                </label>
                <input
                  type="text"
                  {...register("location", {
                    required: "location is required",
                  })}
                  placeholder="Chittagong, Dhaka, etc"
                  className="input input-bordered"
                  required
                />
                {errors.location && (
                  <p className="text-red-500">{errors?.location.message}</p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Vehicle Name</span>
              </label>
              <input
                type="text"
                {...register("name", {
                  required: "Vehicle name is required",
                })}
                placeholder="Vehicle Name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <p className="text-red-500">{errors?.name.message}</p>
              )}
            </div>
            <div className="flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Resale Price</span>
                </label>
                <input
                  type="text"
                  {...register("resale_price", {
                    required: "Resale Price is required",
                  })}
                  placeholder="Resale Price"
                  className="input input-bordered"
                  required
                />
                {errors.resale_price && (
                  <p className="text-red-500">{errors?.resale_price.message}</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Original Price</span>
                </label>
                <input
                  type="text"
                  {...register("original_price", {
                    required: "Original Price is required",
                  })}
                  placeholder="Original Price"
                  className="input input-bordered"
                  required
                />
                {errors.original_price && (
                  <p className="text-red-500">
                    {errors?.original_price.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Year of Purchase</span>
                </label>
                <input
                  type="text"
                  {...register("year_of_purchase", {
                    required: "Purchase year is required",
                  })}
                  placeholder="Purchasing Year"
                  className="input input-bordered"
                  required
                />
                {errors.year_of_purchase && (
                  <p className="text-red-500">
                    {errors?.year_of_purchase.message}
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Total Used in Years: </span>
                </label>
                <input
                  type="text"
                  {...register("years_used", {
                    required: "Years Used is required",
                  })}
                  placeholder="Totally used yeards"
                  className="input input-bordered"
                  required
                />
                {errors.years_used && (
                  <p className="text-red-500">{errors?.years_used.message}</p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Condition</span>
              </label>
              <select
                {...register("condition")}
                className="select select-bordered w-full"
              >
                <option value="Excellent">Excellent</option>
                <option value="Very Good">Very Good</option>
                <option value="Good">Good</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Choose Category</span>
              </label>
              <select
                {...register("category_name")}
                className="select select-bordered w-full"
              >
                <option value="01">Toyota</option>
                <option value="03">Nissan</option>
                <option value="02">Honda</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-primary"
                placeholder="Describe Your product"
              ></textarea>
            </div>
            <div className="form-control w-full mt-2">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                {...register("image")}
                type="file"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
