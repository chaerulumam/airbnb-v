"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="logo"
      src="/images/logo.png"
      className="md:block cursor-pointer hidden"
      height="100"
      width="100"
    />
  );
};

export default Logo;
