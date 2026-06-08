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
import { useRouter } from "next/navigation";

import { AuthContext } from "@/Provider/auth-provider";
import Swal from "sweetalert2";

const drawerWidth = 260;
const appBarHeight = { xs: 64, sm: 76 };
const logoSrc = "/edupulse-premium-logo.svg";
const fontStack =
  'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';

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

  const handleLogout = useCallback(async () => {
    try {
      const result = await Swal.fire({
        title: "Do you want to Log Out From This Account?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Log Out",
        cancelButtonText: "Cancel",
      });

      if (result.isConfirmed) {
        await logOut();
        setLoading(false);

        await Swal.fire({
          title: "Log Out Successful",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
      Swal.fire({
        title: "Error logging out",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  }, [logOut, setLoading]);

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawer = useMemo(
    () => (
      <Box
        onClick={handleDrawerToggle}
        sx={{
          minHeight: "100vh",
          px: 2,
          py: 2.5,
          bgcolor: "#000",
          background: "#000",
          color: "#fff",
        }}
      >
        <Box sx={{ mb: 2.5, display: "flex", justifyContent: "center" }}>
          <Link href="/" passHref legacyBehavior>
            <a aria-label="EduPulse home">
              <Box
                component="img"
                src={logoSrc}
                alt="EduPulse"
                sx={{
                  width: 196,
                  height: "auto",
                  display: "block",
                }}
              />
            </a>
          </Link>
        </Box>
        <Divider sx={{ borderColor: "rgba(255, 255, 255, 0.1)" }} />
        <List sx={{ py: 2 }}>
          {navItems.map(({ name, route }) => (
            <ListItem key={name} disablePadding sx={{ mb: 0.75 }}>
              <Link href={route} passHref legacyBehavior>
                <ListItemButton
                  component="a"
                  sx={{
                    borderRadius: 2,
                    px: 2,
                    py: 1.25,
                    color: "rgba(255, 255, 255, 0.82)",
                    transition: "all 180ms ease",
                    textDecoration: "none",
                    "&:hover": {
                      bgcolor: "rgba(125, 211, 252, 0.12)",
                      color: "#fff",
                    },
                  }}
                >
                  <ListItemText
                    primary={name}
                    sx={{
                      m: 0,
                      ".MuiListItemText-primary": {
                        fontFamily: fontStack,
                        fontSize: 15,
                        fontWeight: 700,
                      },
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
        <Box sx={{ mt: 2 }}>
          <Link href="/auth/signin" passHref legacyBehavior>
            <Button
              variant="contained"
              fullWidth
              sx={{
                minHeight: 46,
                borderRadius: 2,
                bgcolor: "#fff",
                color: "#050816",
                fontFamily: fontStack,
                fontWeight: 800,
                textTransform: "none",
                boxShadow: "0 18px 40px rgba(0, 0, 0, 0.25)",
                "&:hover": {
                  bgcolor: "#e0f2fe",
                },
              }}
            >
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
        elevation={0}
        sx={{
          bgcolor: "#000",
          background: "#000",
          color: "#fff",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 14px 44px rgba(0, 0, 0, 0.22)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              minHeight: appBarHeight,
              display: "grid",
              gridTemplateColumns: { xs: "44px 1fr auto", sm: "auto 1fr auto" },
              gap: { xs: 1, md: 3 },
              alignItems: "center",
            }}
          >
            <IconButton
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                width: 42,
                height: 42,
                color: "#fff",
                display: { sm: "none" },
                border: "1px solid rgba(255, 255, 255, 0.14)",
                bgcolor: "rgba(255, 255, 255, 0.06)",
                "&:hover": {
                  bgcolor: "rgba(125, 211, 252, 0.12)",
                },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-start" },
                minWidth: { sm: 190 },
              }}
            >
              <Link href="/" passHref legacyBehavior>
                <a aria-label="EduPulse home">
                  <Box
                    component="img"
                    src={logoSrc}
                    alt="EduPulse"
                    sx={{
                      width: "clamp(158px, 17vw, 214px)",
                      height: "auto",
                      display: "block",
                    }}
                  />
                </a>
              </Link>
            </Box>

            {/* Navigation & User controls */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "flex-end", sm: "space-between" },
                gap: { sm: 2, md: 3 },
                minWidth: 0,
              }}
            >
              {/* Desktop nav */}
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 0.75,
                  mx: "auto",
                  p: 0.5,
                  borderRadius: 999,
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  bgcolor: "rgba(255, 255, 255, 0.06)",
                }}
              >
                {navItems.map(({ name, route }) => (
                  <Link key={name} href={route} passHref legacyBehavior>
                    <Box
                      component="a"
                      sx={{
                        color: "rgba(255, 255, 255, 0.82)",
                        borderRadius: 999,
                        padding: "10px 16px",
                        textDecoration: "none",
                        fontFamily: fontStack,
                        fontSize: 14,
                        fontWeight: 800,
                        lineHeight: 1,
                        transition: "all 180ms ease",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          bgcolor: "rgba(125, 211, 252, 0.12)",
                          color: "#fff",
                        },
                      }}
                    >
                      {name}
                    </Box>
                  </Link>
                ))}
              </Box>

              {/* User login/avatar */}
              <Box>
                {user ? (
                  <>
                    <Tooltip title="Open settings">
                      <IconButton
                        onClick={handleMenuOpen}
                        sx={{
                          p: 0.5,
                          border: "1px solid rgba(255, 255, 255, 0.18)",
                          bgcolor: "rgba(255, 255, 255, 0.08)",
                          "&:hover": {
                            bgcolor: "rgba(125, 211, 252, 0.12)",
                          },
                        }}
                      >
                        <Avatar
                          alt={user.displayName || ""}
                          src={user.photoURL || ""}
                          sx={{ width: 36, height: 36 }}
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
                      PaperProps={{
                        sx: {
                          mt: 1.5,
                          minWidth: 190,
                          borderRadius: 2,
                          border: "1px solid rgba(15, 23, 42, 0.08)",
                          boxShadow: "0 22px 55px rgba(15, 23, 42, 0.18)",
                          ".MuiMenuItem-root": {
                            fontFamily: fontStack,
                            fontSize: 14,
                          },
                        },
                      }}
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
                    <Button
                      variant="contained"
                      sx={{
                        minHeight: { xs: 42, sm: 44 },
                        px: { xs: 2, sm: 2.5 },
                        borderRadius: 2,
                        bgcolor: "#fff",
                        color: "#050816",
                        fontFamily: fontStack,
                        fontWeight: 800,
                        textTransform: "none",
                        boxShadow: "0 14px 34px rgba(255, 255, 255, 0.12)",
                        whiteSpace: "nowrap",
                        "&:hover": {
                          bgcolor: "#e0f2fe",
                          boxShadow: "0 18px 42px rgba(125, 211, 252, 0.22)",
                        },
                      }}
                    >
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
