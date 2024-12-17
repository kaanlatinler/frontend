"use client";

import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // useRouter import
import { LoginOwner } from "../../../services/api";

const Login = () => {
  const router = useRouter(); // useRouter kullanımı
  const [data, setData] = useState({
    Email: "",
    Password: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginOwner(data);
      if (res.data.success) {
        Swal.fire({
          icon: "success",
          title: "Başarılı",
          text: "Giriş başarılı, yönlendiriliyorsunuz...",
          confirmButtonText: "Devam Et",
          allowOutsideClick: false, // Kullanıcının dışarı tıklayarak kapatmasını engeller
        }).then(() => {
          router.push("/dashboard"); // Butona tıklayınca yönlendirme
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Hata",
          text: res.data.message || "Bir sorun oluştu. Tekrar deneyin.",
          confirmButtonText: "Sayfayı Yenile",
          allowOutsideClick: false,
        }).then(() => {
          router.refresh(); // Sayfayı yenile
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html:
          "Bir şeyler Yanlış Gitti!<br>" +
          (error.response?.data?.message || ""),
        confirmButtonText: "Sayfayı Yenile",
        allowOutsideClick: false,
      }).then(() => {
        router.refresh(); // Hata durumunda sayfa yenileme
      });
    }
  };

  return (
    <div id="auth">
      <div className="row h-100">
        <div className="col-lg-5 col-12">
          <div id="auth-left">
            <div className="auth-logo">
              <a href="/">
                <img src="/assets/images/logo/logo.png" alt="Logo" />
              </a>
            </div>
            <h1 className="auth-title">Log in.</h1>
            <p className="auth-subtitle mb-5">
              Log in with your data that you entered during registration.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="text"
                  className="form-control form-control-xl"
                  placeholder="Email"
                  name="Email"
                  onChange={handleChange}
                />
                <div className="form-control-icon">
                  <i className="bi bi-person"></i>
                </div>
              </div>
              <div className="form-group position-relative has-icon-left mb-4">
                <input
                  type="password"
                  className="form-control form-control-xl"
                  placeholder="Password"
                  name="Password"
                  onChange={handleChange}
                />
                <div className="form-control-icon">
                  <i className="bi bi-shield-lock"></i>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block btn-lg shadow-lg mt-5"
              >
                Log in
              </button>
            </form>
            <div className="text-center mt-5 text-lg fs-4">
              <p>
                <a className="font-bold" href="/auth/forgot-password">
                  Forgot password?
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-7 d-none d-lg-block">
          <div id="auth-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
