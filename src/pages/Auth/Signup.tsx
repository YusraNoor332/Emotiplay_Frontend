import { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaBirthdayCake,
  FaLock,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import axios from "axios";
import { Loader2 } from "lucide-react";

const server = import.meta.env.VITE_SERVER_URL;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Using react-hook-form for managing form inputs and validation
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      const resp = await axios.post(`${server}/api/v1/signup/`, data);
      if (resp) {
        console.log("Here is response of signup:", resp.data);
        toast.success("Signup successful! You can now login.");
        navigate("/login");
      }
    } catch (error) {
      console.log("Error while signup:", error);
      toast.error("Error while signup! Please try again!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 via-purple-50 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Join EmotiPlay
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          {/* First Name */}
          <div className="relative">
            <label htmlFor="first_name" className="sr-only">
              First Name
            </label>
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              id="first_name"
              {...register("first_name", {
                required: "First name is required",
              })}
              className="pl-10 py-2 border rounded-md w-full"
              placeholder="First Name"
            />
            {errors.first_name && (
              <span className="text-red-500">{errors.first_name.message}</span>
            )}
          </div>

          {/* Last Name */}
          <div className="relative">
            <label htmlFor="last_name" className="sr-only">
              Last Name
            </label>
            <FaUser className="absolute top-3 left-3 text-gray-400" />
            <input
              id="last_name"
              {...register("last_name", { required: "Last name is required" })}
              className="pl-10 py-2 border rounded-md w-full"
              placeholder="Last Name"
            />
            {errors.last_name && (
              <span className="text-red-500">{errors.last_name.message}</span>
            )}
          </div>

          {/* Date of Birth */}
          <div className="relative">
            <label htmlFor="date_of_birth" className="sr-only">
              Date of Birth
            </label>
            <FaBirthdayCake className="absolute top-3 left-3 text-gray-400" />
            <input
              type="date"
              id="date_of_birth"
              {...register("date_of_birth", {
                required: "Date of birth is required",
              })}
              className="pl-10 py-2 pr-3 border rounded-md w-full"
            />
            {errors.date_of_birth && (
              <span className="text-red-500">
                {errors.date_of_birth.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="relative">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
            <input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              className="pl-10 py-2 border rounded-md w-full"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div className="relative">
            <label htmlFor="phone_number" className="sr-only">
              Phone Number
            </label>
            <FaPhone className="absolute top-3 left-3 text-gray-400" />
            <input
              id="phone_number"
              type="tel"
              {...register("phone_number", {
                required: "Phone number is required",
              })}
              className="pl-10 py-2 border rounded-md w-full"
              placeholder="Phone Number"
            />
            {errors.phone_number && (
              <span className="text-red-500">
                {errors.phone_number.message}
              </span>
            )}
          </div>

          {/* Gender */}
          <div className="relative">
            <label htmlFor="gender" className="sr-only">
              Gender
            </label>
            <select
              id="gender"
              {...register("gender", { required: "Gender is required" })}
              className="pl-3 py-2 pr-3 border rounded-md w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500">{errors.gender.message}</span>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <FaLock className="absolute top-3 left-3 text-gray-400" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              className="pl-10 py-2 border rounded-md w-full"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full text-white bg-purple-600 hover:bg-purple-700 flex items-center justify-center disabled:opacity-50"
          >
            {isLoading && <Loader2 className="w-5 h-5 animate-spin mr-2" />}
            {isLoading ? "Loading..." : "Sign up"}
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-purple-600 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
