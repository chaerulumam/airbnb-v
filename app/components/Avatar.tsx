"use client";

import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      alt="avatar placeholder"
      src={src || "/images/avatar.jpeg"}
      className="rounded-full"
      height="30"
      width="30"
      priority
    />
  );
};

export default Avatar;
