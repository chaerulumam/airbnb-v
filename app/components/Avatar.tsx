"use client";

import Image from "next/image";

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
