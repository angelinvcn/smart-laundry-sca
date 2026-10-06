"use client";

import { useState } from "react";

export default function Home() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="login-page">
      <div className="login-card">

        {/* Logo */}
        <div className="logo-circle">
          <span>♨</span>
        </div>

        {/* Role */}
        <div className="role-badge">Admin</div>

        {/* Brand */}
        <h1>SMART LAUNDRY</h1>

        <p className="tagline">
          CUCI BERSIH, CEPAT & TEPAT WAKTU
        </p>

        <p className="welcome">
          Selamat datang kembali! Silahkan
          <br />
          masukkan akun Anda
        </p>

        {/* Email */}
        <div className="form-group">
          <label>EMAIL / USERNAME</label>

          <div className="input-wrapper">
            <span className="input-icon">✉</span>

            <input
              type="text"
              placeholder="Masukkan Email atau Username"
            />
          </div>
        </div>

        {/* Password */}
        <div className="form-group">
          <div className="password-label">
            <label>PASSWORD</label>

            <button type="button" className="forgot">
              Lupa Password?
            </button>
          </div>

          <div className="input-wrapper">
            <span className="input-icon">♙</span>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan Password"
            />

            <button
              type="button"
              className="eye-button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "◉" : "○"}
            </button>
          </div>
        </div>

        {/* Login */}
        <button className="login-button">
          MASUK
        </button>

        {/* Divider */}
        <div className="divider">
          <span></span>
          <p>Atau Masuk Dengan</p>
          <span></span>
        </div>

        {/* Social Login */}
        <div className="social-container">

          <button className="social-button">
            <span className="google-icon">G</span>
            Google
          </button>

          <button className="social-button">
            <span>f</span>
            Facebook
          </button>

        </div>

        {/* Register */}
        <p className="register-text">
          Belum punya akun?{" "}
          <button className="register-link">
            Daftar Sekarang
          </button>
        </p>

      </div>
    </main>
  );
}