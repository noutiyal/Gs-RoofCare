import { useState, ReactNode } from "react";
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

// Define props for TypeScript
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect if screen width is below 614px
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
        position="fixed"
        sx={{ backgroundColor: "#3e767e", padding: "10px 0" }}
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
            <Link href="/" style={{ textDecoration: "none", color: "#fff" }}>
              <img
                src="/gsroofcarelogo2.png"
                alt="GS Roof Care Logo"
                style={{ height: "5rem" }}
              />
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
                <Link
                  key={item.label}
                  href={item.path}
                  style={{ textDecoration: "none", color: "#fff" }}
                >
                  <Button color="inherit">{item.label}</Button>
                </Link>
              ))}
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
            backgroundColor: "#3e767e",
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
                href=""
                style={{ textDecoration: "none", color: "#fff", width: "100%" }}
              >
                <ListItemText primary="Call Now" />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content with Spacing Fix */}
      <main style={{ paddingTop: "4px" }}>{children}</main>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#3e767e",
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
