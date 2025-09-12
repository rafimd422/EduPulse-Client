import React, { useState, useCallback, useContext, useMemo } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import swal from "sweetalert";

import { AuthContext } from "@/Provider/auth-provider";
import logo from "./../../assets/logo.png";

const drawerWidth = 260;

const navItems = [
  { name: "Home", route: "/" },
  { name: "All Classes", route: "/allclasses" },
  { name: "Teach on Edupulse", route: "/teachonedupulse" },
];

interface NavbarProps {
  window?: () => Window;
}

interface User {
  displayName?: string | null;
  photoURL?: string | null;
}

interface AuthContextType {
  user: User | null;
  logOut: () => Promise<void>;
  setLoading: (loading: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ window }) => {
  const router = useRouter();
  const { user, logOut, setLoading } = useContext(
    AuthContext
  ) as AuthContextType;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prev) => !prev);
  }, []);

  const handleMenuOpen = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleLogout = useCallback(() => {
    swal({
      title: "Do you want to Log Out From This Account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        logOut().then(() => setLoading(false));
        swal("Log Out Successful", { icon: "success" });
      }
    });
    handleMenuClose();
  }, [logOut, setLoading, handleMenuClose]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = useMemo(
    () => (
      <Box
        onClick={handleDrawerToggle}
        sx={{ textAlign: "center", bgcolor: "black", height: "100vh" }}
      >
        <Box sx={{ py: 2 }}>
          <Image src={logo} alt="logo" width={200} height={80} priority />
        </Box>
        <Divider />
        <List>
          {navItems.map(({ name, route }) => (
            <ListItem key={name} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Link
                  href={route}
                  className={""} // adjust active check if needed
                  passHref
                  legacyBehavior
                >
                  <ListItemText
                    primary={name}
                    sx={{
                      color: "whitesmoke",
                    }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2 }}>
          <Link href="/auth/signin" passHref legacyBehavior>
            <Button variant="outlined" color="error" fullWidth>
              Sign In
            </Button>
          </Link>
        </Box>
      </Box>
    ),
    [handleDrawerToggle]
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          fontFamily: "monospace",
          boxShadow: "0 1px 3px rgb(0 0 0 / 0.2)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
              <Link href="/" passHref legacyBehavior>
                <a>
                  <Image
                    src={logo}
                    alt="logo"
                    width={230}
                    height={100}
                    priority
                  />
                </a>
              </Link>
            </Box>

            {/* Navigation & User controls */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "row-reverse", sm: "row" },
                justifyContent: { xs: "space-between", sm: "space-evenly" },
                alignItems: "center",
                width: "100%",
              }}
            >
              {/* Desktop nav */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  gap: 2,
                }}
              >
                {navItems.map(({ name, route }) => (
                  <Link key={name} href={route} passHref legacyBehavior>
                    <a
                      style={{
                        color: "whitesmoke",
                        borderRadius: 4,
                        padding: "6px 12px",
                        textDecoration: "none",
                      }}
                    >
                      {name}
                    </a>
                  </Link>
                ))}
              </Box>

              {/* User login/avatar */}
              <Box>
                {user ? (
                  <>
                    <Tooltip title="Open settings">
                      <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                        <Avatar
                          alt={user.displayName || ""}
                          src={user.photoURL || ""}
                        />
                      </IconButton>
                    </Tooltip>

                    <Menu
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={handleMenuClose}
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      transformOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                      }}
                      keepMounted
                    >
                      <MenuItem disabled sx={{ fontSize: 12 }}>
                        {user.displayName}
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          router.push("/dashboard/profile");
                          handleMenuClose();
                        }}
                      >
                        Dashboard
                      </MenuItem>
                      <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                    </Menu>
                  </>
                ) : (
                  <Link href="/auth/signin" passHref legacyBehavior>
                    <Button variant="outlined" color="error">
                      Sign In
                    </Button>
                  </Link>
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
