"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Logout = () => {
  const router = useRouter();
  useEffect(() => {
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/auth/login");
  }, []);
  return <div>Logout..</div>;
};

export default Logout;
