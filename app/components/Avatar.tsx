"use client";

import Image from "next/image";
import React from "react";

const Avatar = () => {
  return (
    <Image
      alt="avatar placeholder"
      src="/images/avatar.jpeg"
      className="rounded-full"
      height="30"
      width="30"
      priority
    />
  );
};

export default Avatar;
