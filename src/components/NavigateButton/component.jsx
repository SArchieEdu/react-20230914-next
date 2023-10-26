"use client";

import { useRouter } from "next/navigation";

export const NavigateButton = ({ children, to }) => {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push(to);
      }}
    >
      {children}
    </button>
  );
};
