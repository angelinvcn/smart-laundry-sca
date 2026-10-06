"use client";

import { useState } from "react";
import Link from "next/link";
import {
  User,
  Mail,
  UserCircle,
  LockKeyhole,
  Eye,
  EyeOff,
  RotateCcw,
} from "lucide-react";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.nama ||
      !formData.email ||
      !formData.username ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Semua data wajib diisi.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Konfirmasi password tidak sesuai.");
      return;
    }

    alert("Registrasi berhasil!");
  };

  const handleGoogleRegister = () => {
    alert("Daftar dengan Google");
  };

  const handleFacebookRegister = () => {
    alert("Daftar dengan Facebook");
  };

  return (
    <main className="register-page">

      <div className="register-card">

        {/* LOGO SCA SMART LAUNDRY */}
        <div className="logo">
          <img
            src="/sca-logo.png"
            alt="SCA Smart Laundry"
          />
        </div>


        {/* ROLE */}
        <div className="role-badge">
          <span>●</span> Admin
        </div>


        {/* TITLE */}
        <h1>Register</h1>

        <p className="subtitle">
          Buat akun baru untuk melanjutkan
        </p>


        {/* FORM */}
        <form onSubmit={handleRegister}>

          {/* NAMA LENGKAP */}
          <div className="form-group">

            <label htmlFor="nama">
              Nama Lengkap<span>*</span>
            </label>

            <div className="input-box">

              <User
                className="input-icon"
                size={15}
              />

              <input
                id="nama"
                name="nama"
                type="text"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama Lengkap Anda"
              />

            </div>

          </div>


          {/* EMAIL */}
          <div className="form-group">

            <label htmlFor="email">
              Email<span>*</span>
            </label>

            <div className="input-box">

              <Mail
                className="input-icon"
                size={15}
              />

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Anonymous@gmail.com"
              />

            </div>

          </div>


          {/* USERNAME */}
          <div className="form-group">

            <label htmlFor="username">
              Username<span>*</span>
            </label>

            <div className="input-box">

              <UserCircle
                className="input-icon"
                size={15}
              />

              <input
                id="username"
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username_admin"
              />

            </div>

          </div>


          {/* PASSWORD */}
          <div className="form-group">

            <label htmlFor="password">
              Password<span>*</span>
            </label>

            <div className="input-box">

              <LockKeyhole
                className="input-icon"
                size={15}
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Minimal 6 karakter"
              />

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


          {/* KONFIRMASI PASSWORD */}
          <div className="form-group">

            <label htmlFor="confirmPassword">
              Konfirmasi password<span>*</span>
            </label>

            <div className="input-box">

              <div className="confirm-icon">
                <RotateCcw size={14} />
              </div>

              <input
                id="confirmPassword"
                name="confirmPassword"
                type={
                  showConfirmPassword
                    ? "text"
                    : "password"
                }
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Ulangi Kata Sandi"
              />

              <button
                type="button"
                className="eye-button"
                onClick={() =>
                  setShowConfirmPassword(
                    !showConfirmPassword
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={16} />
                ) : (
                  <Eye size={16} />
                )}
              </button>

            </div>

          </div>


          {/* DAFTAR */}
          <button
            type="submit"
            className="register-button"
          >
            DAFTAR
          </button>

        </form>


        {/* DIVIDER */}
        <div className="divider">

          <span />

          <p>Atau Daftar Dengan</p>

          <span />

        </div>


        {/* SOCIAL LOGIN */}
        <div className="social-buttons">

          <button
            type="button"
            className="social-button"
            onClick={handleGoogleRegister}
          >
            <strong className="google-logo">
              G
            </strong>

            <span>Google</span>
          </button>


          <button
            type="button"
            className="social-button"
            onClick={handleFacebookRegister}
          >
            <strong className="facebook-logo">
              f
            </strong>

            <span>Facebook</span>
          </button>

        </div>


        {/* LOGIN LINK */}
        <p className="login-text">
          Sudah punya akun?{" "}
          <Link href="/login">
            Login
          </Link>
        </p>

      </div>

    </main>
  );
}