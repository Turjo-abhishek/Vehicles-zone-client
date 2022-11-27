import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const handleAddProduct = (data) => {};

  return (
    <div className="w-full lg:w-2/3 mx-auto">
      <div className="hero-content gap-20  flex-col lg:flex-row py-20">
        <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
          <h1 className="text-4xl font-bold text-center pt-5">Add a Product</h1>
          <form
            onSubmit={handleSubmit(handleAddProduct)}
            className="card-body pb-4"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                {...register("seller_name", {
                  required: "Name is required",
                })}
                placeholder="Seller Name"
                className="input input-bordered"
              />
              {errors.seller_name && (
                <p className="text-red-500">{errors?.seller_name.message}</p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="email"
                {...register("seller_email", {
                  required: "Email is required",
                })}
                placeholder="Seller Email"
                className="input input-bordered"
                required
              />
              {errors.seller_email && (
                <p className="text-red-500">{errors?.seller_email.message}</p>
              )}
            </div>
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
                  placeholder="Seller Location"
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
                  <p className="text-red-500">
                    {errors?.years_used.message}
                  </p>
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
                <option value="Very Good">
                    Very Good
                </option>
                <option value="Good">
                    Good
                </option>
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
                <option value="Toyota">Toyota</option>
                <option value="Nissan">
                  Nissan
                </option>
                <option value="Toyota">
                  Toyota
                </option>
              </select>
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
