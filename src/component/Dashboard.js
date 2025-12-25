import React, { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container, Box, List, ListItem, ListItemText, Paper } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tab, setTab] = useState("products");

  const products = [
    { id: 1, name: "iPhone 15 Pro Max", price: "30.000.000đ" },
    { id: 2, name: "MacBook Air M3", price: "28.000.000đ" }
  ];

  const users = [
    { id: 1, name: "Admin Hệ Thống", email: "admin@example.com" },
    { id: 2, name: "Nguyễn Văn Khách", email: "khach@example.com" }
  ];

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  if (!localStorage.getItem("isLoggedIn")) {
    return <Navigate to="/login" />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={() => setTab("products")}>Sản phẩm</Button>
          <Button color="inherit" onClick={() => setTab("users")}>Người dùng</Button>
          <Button color="error" variant="contained" onClick={handleLogout} sx={{ ml: 2 }}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Paper elevation={2} sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            {tab === "products" ? "Quản lý sản phẩm" : "Quản lý người dùng"}
          </Typography>
          <List>
            {tab === "products" ? (
              products.map((p) => (
                <ListItem key={p.id} divider>
                  <ListItemText primary={p.name} secondary={p.price} />
                </ListItem>
              ))
            ) : (
              users.map((u) => (
                <ListItem key={u.id} divider>
                  <ListItemText primary={u.name} secondary={u.email} />
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Container>
    </Box>
  );
};

export default Dashboard;