"use client";

import {
  LayoutDashboard,
  ClipboardList,
  CreditCard,
  History,
  Tag,
  BarChart3,
  MapPin,
  Bell,
  UserCircle,
  LogOut,
  WashingMachine,
  PackageCheck,
  Hourglass,
  ClipboardCheck,
  QrCode,
  Clock3,
  Filter,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";


export default function DashboardPage() {
  return (
    <div className="dashboard-page">

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="dashboard-sidebar">

        {/* BRAND */}
        <div className="sidebar-brand">

          <div className="sidebar-logo">
            <span>◔</span>
          </div>

          <div className="brand-name">
            SCA Smart Laundry
          </div>

        </div>


        {/* MENU */}
        <nav className="sidebar-menu">

          <button className="sidebar-menu-item active">
            <LayoutDashboard />
            <span>Dashboard</span>
          </button>

          <button className="sidebar-menu-item">
            <ClipboardList />
            <span>Kelola Pesanan</span>
          </button>

          <button className="sidebar-menu-item">
            <CreditCard />
            <span>Pembayaran</span>
          </button>

          <button className="sidebar-menu-item">
            <History />
            <span>Riwayat Transaksi</span>
          </button>

          <button className="sidebar-menu-item">
            <Tag />
            <span>Info Promo</span>
          </button>

          <button className="sidebar-menu-item">
            <BarChart3 />
            <span>Layanan dan Harga</span>
          </button>

          <button className="sidebar-menu-item">
            <MapPin />
            <span>Lokasi</span>
          </button>

          <button className="sidebar-menu-item">
            <Bell />
            <span>Notifikasi</span>
          </button>

          <button className="sidebar-menu-item">
            <UserCircle />
            <span>Profil Admin</span>
          </button>

        </nav>


        {/* LOGOUT */}
        <button className="sidebar-logout">
          <LogOut />
          <span>Logout Akun</span>
        </button>

      </aside>


      {/* =====================================================
          MAIN
      ===================================================== */}

      <main className="dashboard-main">

        {/* HEADER */}
        <header className="dashboard-header">

          <div>
            <h1>Dashboard</h1>

            <p>
              Ringkasan &amp; Aktivitas Operasional Laundry
            </p>
          </div>


          <div className="header-admin">

            <button className="notification-button">
              <Bell />
            </button>

            <div className="admin-profile">
              <UserCircle />
              <span>Admin Laundry</span>
            </div>

          </div>

        </header>


        {/* CONTENT */}
        <div className="dashboard-content">


          {/* =================================================
              STATISTICS
          ================================================= */}

          <section className="statistics-grid">


            {/* TOTAL PESANAN */}
            <div className="stat-card">

              <div className="stat-info">

                <p>TOTAL PESANAN</p>

                <h2>142 Pesanan</h2>

                <span className="capacity">
                  Kapasitas 82%
                </span>

                <div className="stat-progress">
                  <div
                    className="progress-bar"
                    style={{ width: "82%" }}
                  />
                </div>

              </div>


              <div className="stat-icon">
                <ClipboardList />
              </div>


              {/* GARIS BIRU */}
              <div
                className="card-blue-line"
                style={{ width: "82%" }}
              />

            </div>



            {/* =================================================
                PESANAN DIPROSES
            ================================================= */}

            <div className="stat-card">

              <div className="stat-info">

                <p>PESANAN DIPROSES</p>

                <h2>38 Pesanan</h2>

                <div className="stat-list">

                  <span>
                    • 21 Cuci
                  </span>

                  <span>
                    • 17 Pengering
                  </span>

                </div>

              </div>


              {/* MESIN CUCI */}
              <div className="stat-icon">
                <WashingMachine />
              </div>


              <div className="stat-status">
                Aktif
              </div>


              {/* GARIS BIRU */}
              <div
                className="card-blue-line"
                style={{ width: "72%" }}
              />

            </div>



            {/* =================================================
                SELESAI
            ================================================= */}

            <div className="stat-card">

              <div className="stat-info">

                <p>SELESAI</p>

                <h2>89 Paket</h2>

                <div className="stat-list">

                  <span>
                    • 63 Diambil
                  </span>

                  <span>
                    • 26 Di Rak
                  </span>

                </div>

              </div>


              <div className="stat-icon">
                <PackageCheck />
              </div>


              <div className="stat-status online">
                On-Time
              </div>


              {/* GARIS BIRU */}
              <div
                className="card-blue-line"
                style={{ width: "72%" }}
              />

            </div>



            {/* =================================================
                PENDING / ANTREAN
            ================================================= */}

            <div className="stat-card">

              <div className="stat-info">

                <p>PENDING/ANTREAN</p>

                <h2>142 Antrean</h2>

                <div className="stat-list">

                  <span>
                    • 9 Konfirmasi
                  </span>

                  <span>
                    • 6 Timbang
                  </span>

                </div>

              </div>


              <div className="stat-icon">
                <Hourglass />
              </div>


              <div className="stat-status priority">
                Prioritas
              </div>


              {/* GARIS BIRU */}
              <div
                className="card-blue-line"
                style={{ width: "72%" }}
              />

            </div>

          </section>



          {/* =================================================
              PESANAN TERBARU
          ================================================= */}

          <section className="orders-section">


            <div className="section-title">

              <div className="title-line" />

              <div>
                <h2>Pesanan Terbaru</h2>

                <p>
                  Daftar transaksi laundry terkini yang tercatat pada sistem
                </p>
              </div>

            </div>



            {/* FILTER */}
            <div className="order-toolbar">

              <div className="filter-buttons">

                <button className="active">
                  Semua
                </button>

                <button>
                  Sedang Cuci
                </button>

                <button>
                  Siap Diambil
                </button>

                <button>
                  Pengering
                </button>

                <button className="filter-button">
                  <Filter />
                  Filter
                </button>

              </div>

            </div>



            {/* =================================================
                TABLE
            ================================================= */}

            <div className="orders-table-wrapper">

              <table className="orders-table">

                <thead>

                  <tr>

                    <th>PRE-ORDER</th>

                    <th>PELANGGAN</th>

                    <th>LAYANAN</th>

                    <th>STATUS</th>

                    <th>TANGGAL</th>

                  </tr>

                </thead>


                <tbody>

                  <tr>
                    <td>
                      <QrCode />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>


                  <tr>
                    <td>
                      <QrCode />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>


                  <tr>
                    <td>
                      <Hourglass />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>


                  <tr>
                    <td>
                      <QrCode />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>


                  <tr>
                    <td>
                      <Clock3 />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>


                  <tr>
                    <td>
                      <Hourglass />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>


                  <tr>
                    <td>
                      <ClipboardCheck />
                    </td>

                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>

                </tbody>

              </table>

            </div>



            {/* TABLE FOOTER */}

            <div className="table-footer">

              <span>
                Menampilkan 1 - 5 dari 142 pesanan
              </span>


              <div className="pagination">

                <button>
                  <ChevronLeft />
                </button>

                <button className="active">
                  1
                </button>

                <button>
                  2
                </button>

                <button>
                  3
                </button>

                <button>
                  <ChevronRight />
                </button>

              </div>

            </div>

          </section>

        </div>

      </main>

    </div>
  );
}