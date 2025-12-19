import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState("products");

  const products = [
    { id: 1, name: "Laptop Gaming", price: "20tr" },
    { id: 2, name: "Chuột Không Dây", price: "500k" },
  ];

  const users = [
    { id: 1, name: "Nguyễn Văn Admin", role: "Quản trị" },
    { id: 2, name: "Lê Thị Editor", role: "Biên tập" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!localStorage.getItem("isLoggedIn")) {
    return <Navigate to="/login" />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <header style={{ borderBottom: "2px solid #eee", paddingBottom: "10px", marginBottom: "20px" }}>
        <button onClick={() => setCurrentView("products")}>Quản lý sản phẩm</button>
        <button onClick={() => setCurrentView("users")} style={{ margin: "0 15px" }}>Quản lý users</button>
        <button onClick={handleLogout} style={{ backgroundColor: "#ff4d4d", color: "white" }}>Logout</button>
      </header>

      <main>
        {currentView === "products" ? (
          <div>
            <h3>Danh sách sản phẩm</h3>
            <ul>
              {products.map(p => <li key={p.id}>{p.name} - {p.price}</li>)}
            </ul>
          </div>
        ) : (
          <div>
            <h3>Danh sách người dùng</h3>
            <ul>
              {users.map(u => <li key={u.id}>{u.name} ({u.role})</li>)}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;