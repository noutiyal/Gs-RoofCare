import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect if screen is below 614px
  const isMobile = useMediaQuery("(max-width: 614px)");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Navigation Links
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
  ];

  return (
    <>
      {/* Navbar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#0D47A1", padding: "10px 0" }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff" }}>
            <Link
              href="/"
              passHref
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Gs RoofCare
            </Link>
          </Typography>

          {/* Mobile Menu Button */}
          {isMobile ? (
            <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
              <MenuIcon />
            </IconButton>
          ) : (
            /* Desktop Navigation */
            <Box sx={{ display: "flex", gap: 2 }}>
              {navItems.map((item) => (
                <Button color="inherit" key={item.label}>
                  <Link
                    href={item.path}
                    passHref
                    style={{ textDecoration: "none", color: "#fff" }}
                  >
                    {item.label}
                  </Link>
                </Button>
              ))}
            </Box>
          )}

          {/* Auth Buttons (Always Visible) */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <Link href="/login" passHref>
                <Button
                  variant="outlined"
                  sx={{ color: "#fff", borderColor: "#fff" }}
                >
                  Login
                </Button>
              </Link>
              <Link href="/signup" passHref>
                <Button variant="contained" sx={{ backgroundColor: "#FFA000" }}>
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer (Sidebar) */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: "250px",
            backgroundColor: "#0D47A1",
            color: "#fff",
          },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={handleDrawerToggle}>
                <Link
                  href={item.path}
                  passHref
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    width: "100%",
                  }}
                >
                  <ListItemText primary={item.label} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ backgroundColor: "#fff" }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <Link
                href="/login"
                passHref
                style={{ textDecoration: "none", color: "#fff", width: "100%" }}
              >
                <ListItemText primary="Login" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleDrawerToggle}>
              <Link
                href="/signup"
                passHref
                style={{ textDecoration: "none", color: "#fff", width: "100%" }}
              >
                <ListItemText primary="Sign Up" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <main style={{ padding: "10px" }}>{children}</main>
      <Box
        sx={{
          backgroundColor: "#0d47a1",
          color: "white",
          textAlign: "center",
          p: 2,
        }}
      >
        <Typography variant="h6">Contact Us</Typography>
        <Typography>
          Email:{" "}
          <a
            href="mailto:Gsroofcareltd@gmail.com"
            style={{ color: "white", textDecoration: "none" }}
          >
            Gsroofcareltd@gmail.com
          </a>
        </Typography>
        <Typography>
          Phone:{" "}
          <a
            href="tel:+9876567890"
            style={{ color: "white", textDecoration: "none" }}
          >
            +9876567890
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
