"use client";

import { createContext, useState, useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { CheckToken } from "@/services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Eğer giriş veya kayıt sayfasındaysan token kontrolünü atla
    if (router.pathname === "/auth/login") {
      return;
    }

    let token = sessionStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setUser(decoded); // JWT'den kullanıcı verilerini çıkar
      } catch (err) {
        localStorage.removeItem("token");
        localStorage.clear();
        router.push("/auth/login");
      }
    } else {
      router.push("/auth/login");
    }
  }, [router.pathname]);

  const logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.clear();
    setUser(null);
    router.push("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
