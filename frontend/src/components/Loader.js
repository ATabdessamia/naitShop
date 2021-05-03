import React from "react";
import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <Spin
        tip="Loading..."
        size="large"
        className="bg-red-100 container mx-auto w-full"
      />
    </div>
  );
};

export default Loader;
