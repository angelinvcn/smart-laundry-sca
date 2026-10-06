"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !formData.emailOrUsername ||
      !formData.password
    ) {
      alert("Email/Username dan password wajib diisi.");
      return;
    }

    alert("Login berhasil!");
  };

  const handleGoogleLogin = () => {
    alert("Login dengan Google");
  };

  const handleFacebookLogin = () => {
    alert("Login dengan Facebook");
  };

  const handleForgotPassword = () => {
    alert("Fitur Lupa Password");
  };

  return (
    <main className="login-page">

      <div className="login-card">

        {/* LOGO SCA SMART LAUNDRY */}
        <div className="logo">
          <img
            src="/sca-logo.png"
            alt="SCA Smart Laundry"
          />
        </div>


        {/* ROLE ADMIN */}
        <div className="role-badge">
          <span>●</span> Admin
        </div>


        {/* BRAND */}
        <h1 className="brand-title">
          SCA Smart Laundry
        </h1>

        <p className="tagline">
          CUCI BERSIH, CEPAT &amp; TEPAT WAKTU
        </p>

        <p className="welcome-text">
          Selamat Datang Kembali! Silahkan
          <br />
          Masukan Akun Anda
        </p>


        {/* FORM LOGIN */}
        <form onSubmit={handleLogin}>

          {/* EMAIL / USERNAME */}
          <div className="form-group">

            <label htmlFor="emailOrUsername">
              EMAIL / USERNAME
            </label>

            <div className="input-box">

              <Mail
                className="input-icon"
                size={15}
              />

              <input
                id="emailOrUsername"
                name="emailOrUsername"
                type="text"
                value={formData.emailOrUsername}
                onChange={handleChange}
                placeholder="Masukan Email atau Username"
              />

            </div>

          </div>


          {/* PASSWORD */}
          <div className="form-group">

            <div className="password-header">

              <label htmlFor="password">
                PASSWORD
              </label>

              <button
                type="button"
                className="forgot-password"
                onClick={handleForgotPassword}
              >
                Lupa Password?
              </button>

            </div>


            <div className="input-box">

              <LockKeyhole
                className="input-icon"
                size={15}
              />

              <input
                id="password"
                name="password"
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                value={formData.password}
                onChange={handleChange}
                placeholder="Masukan Password"
              />


              {/* SHOW / HIDE PASSWORD */}
              <button
                type="button"
                className="eye-button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
              >
                {showPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>

            </div>

          </div>


          {/* TOMBOL MASUK */}
          <button
            type="submit"
            className="login-button"
          >
            MASUK
          </button>

        </form>


        {/* DIVIDER */}
        <div className="divider">

          <span />

          <p>Atau Masuk Dengan</p>

          <span />

        </div>


        {/* GOOGLE & FACEBOOK */}
        <div className="social-buttons">

          <button
            type="button"
            className="social-button"
            onClick={handleGoogleLogin}
          >
            <strong className="google-logo">
              G
            </strong>

            <span>Google</span>
          </button>


          <button
            type="button"
            className="social-button"
            onClick={handleFacebookLogin}
          >
            <strong className="facebook-logo">
              f
            </strong>

            <span>Facebook</span>
          </button>

        </div>


        {/* REGISTER */}
        <p className="register-text">
          Belum punya akun?{" "}
          <Link href="/register">
            Daftar Sekarang
          </Link>
        </p>

      </div>

    </main>
  );
}