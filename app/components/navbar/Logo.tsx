"use client";

import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <Image
      alt="logo"
      src="/images/logo.png"
      className="md:block cursor-pointer hidden"
      height="100"
      width="100"
    />
  );
};

export default Logo;
