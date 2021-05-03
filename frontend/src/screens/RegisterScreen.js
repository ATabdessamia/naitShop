import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { register } from "../actions/userActions";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegisterScreen = ({ location, history }) => {
  const [formData, setFormData] = useState(initialState);
  const [message, setMessage] = useState(null);

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const onChangeValue = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(register(formData.name, formData.email, formData.password));
    }
  };

  return (
    <FormContainer>
      <h1 className="text-lg sm:text-3xl md:text-4xl uppercase text-gray-700 p-1 -ml-1 tracking-widest font-extrabold mt-10">
        sign up
      </h1>
      {error && (
        <Message
          message={<span className="text-red-900">{error}</span>}
          type="error"
          closable
        />
      )}
      {message && (
        <Message
          message={<span className="text-red-900">{message}</span>}
          type="error"
          closable
        />
      )}
      {loading && <Loader />}
      <form
        className={`${loading && "hidden"} mt-3`}
        onSubmit={(e) => submitHandler(e)}
      >
        <div className="my-2">
          <label className="mb-2 inline-block text-gray-700 capitalize ttext-sm sm:text-base md:text-sm lg:text-base">
            name
          </label>
          <input
            className="block w-full text-sm font-normal py-3 px-6 md:py-2 md:px-4 lg:py-3 lg:px-6 text-gray-600 bg-gray-100 bg-clip-padding border-0 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-gray-200 focus:shadow-sm transition-colors ease-in-out input-h"
            name="name"
            type="text"
            placeholder="Enter name"
            value={formData.name}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        <div className="my-2">
          <label className="mb-2 inline-block text-gray-700 capitalize text-sm sm:text-base md:text-sm lg:text-base">
            email address
          </label>
          <input
            className="block w-full text-sm font-normal py-3 px-6 md:py-2 md:px-4 lg:py-3 lg:px-6 text-gray-600 bg-gray-100 bg-clip-padding border-0 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-gray-200 focus:shadow-sm transition-colors ease-in-out input-h"
            name="email"
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        <div className="my-2">
          <label className="mb-2 inline-block text-gray-700 capitalize text-sm sm:text-base md:text-sm lg:text-base">
            password
          </label>
          <input
            className="block w-full text-sm font-normal py-3 px-6 md:py-2 md:px-4 lg:py-3 lg:px-6 text-gray-600 bg-gray-100 bg-clip-padding border-0 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-gray-200 focus:shadow-sm transition-colors ease-in-out input-h"
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        <div className="my-2">
          <label className="mb-2 inline-block text-gray-700 capitalize text-sm sm:text-base md:text-sm lg:text-base">
            confirm password
          </label>
          <input
            className="block w-full text-sm font-normal py-3 px-6 md:py-2 md:px-4 lg:py-3 lg:px-6 text-gray-600 bg-gray-100 bg-clip-padding border-0 focus:outline-none focus:ring-4 focus:ring-inset focus:ring-gray-200 focus:shadow-sm transition-colors ease-in-out input-h"
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={(e) => onChangeValue(e)}
          />
        </div>
        <button
          type="submit"
          className="bg-green-900 opacity-90 text-green-100 uppercase px-6 py-3 md:py-2 md:px-4 lg:py-3 lg:px-6 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-200 hover:opacity-100 inline-block text-sm my-2 text-center transition-colors ease-in-out"
        >
          register
        </button>
      </form>
      <div className={`${!loading && "hidden"} py-2 capitalize`}>
        <div className="text-gray-700 text-opacity-80">
          have an account?{" "}
          <Link
            to={redirect ? `/login?redirect=${redirect}` : "/login"}
            className="text-gray-700 hover:underline"
          >
            login
          </Link>
        </div>
      </div>
    </FormContainer>
  );
};

export default RegisterScreen;
