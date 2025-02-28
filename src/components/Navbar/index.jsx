import * as React from "react";
import PropTypes from "prop-types";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import {
  CssBaseline,
  Box,
  AppBar,
  List,
  IconButton,
  Drawer,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Avatar,
  Container,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import { useRouter } from "next/router";
import logo from "./../../assets/logo.png";
import Image from "next/legacy/image";
import Button from "@mui/material/Button";
import { AuthContext } from "@/Provider/AuthProvider";
import swal from "sweetalert";
import { useCallback } from "react";
import { useState } from "react";
import { useContext } from "react";

const drawerWidth = 260;
const navItems = [
  { name: "Home", route: "/" },
  { name: "All Classes", route: "/allclasses" },
  { name: "Teach on Edupulse", route: "/teachonedupulse" },
];

const Navbar = ({ window }) => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const { user, logOut, setLoading } = useContext(AuthContext);
  
  const handleDrawerToggle = useCallback(() => {
    setMobileOpen((prevState) => !prevState);
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = useCallback(()=>{
    setAnchorEl(null)
  })

  const handleLogout = useCallback(() => {
    swal({
      title: "Do you want to Log Out From This Account?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        logOut().then(() => {
          setLoading(false);
        });
        swal("Log Out Successfull", {
          icon: "success",
        });
      }
    });
  });

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "black", height: "100vh" }}
    >
      <Image src={logo} width={"100%"} height={100} alt="logo" />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center", display: "inline" }}>
              {router.pathname === item.route ? (
                <Link href={item.route} className="nav-link active">
                  <ListItemText
                    primary={item.name}
                    sx={{
                      color: "whitesmoke",
                      backgroundColor: "red",
                      textDecoration: "none",
                      padding: ".4rem",
                      borderRadius: ".3rem",
                    }}
                  />
                </Link>
              ) : (
                <Link href={item.route} className="nav-link">
                  <ListItemText
                    primary={item.name}
                    sx={{ color: "whitesmoke", textDecoration: "none" }}
                  />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Link href={"/auth/signin"}>
        {" "}
        <Button variant="outlined" color="error">
          Sign In
        </Button>
      </Link>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          bgColor: "#0d0c0c",
          fontFamily: "monospace",
          boxShadow: "alice 1px 1px 1px 1px",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <Image src={logo} width={230} height={100} alt="logo" />
            </Typography>
            <Container
              sx={{
                display: "flex",
                flexDirection: { sm: "row", xs: "row-reverse" },
                justifyContent: { sm: "space-evenly", xs: "space-between" },
                alignItems: "center",
              }}
              width={"100%"}
            >
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "center",
                }}
              >
                {navItems.map((item) => (
                  <ListItem
                    key={item.name}
                    disablePadding
                    sx={{ width: "fit-content" }}
                  >
                    <ListItemButton
                      sx={{ textAlign: "center", display: "inline" }}
                    >
                      {router.pathname === item.route ? (
                        <Link href={item.route} className="nav-link active">
                          <ListItemText
                            primary={item.name}
                            sx={{
                              color: "whitesmoke",
                              backgroundColor: "red",
                              textDecoration: "none",
                              padding: ".4rem",
                              borderRadius: ".3rem",
                            }}
                          />
                        </Link>
                      ) : (
                        <Link
                          href={item.route}
                          className="nav-link"
                          sx={{ textDecoration: "none" }}
                        >
                          <ListItemText
                            primary={item.name}
                            sx={{ color: "whitesmoke", textDecoration: "none" }}
                          />
                        </Link>
                      )}
                    </ListItemButton>
                  </ListItem>
                ))}
              </Box>

              <div>
                {user !== null ? (
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleMenu} sx={{ p: 0 }}>
                      <Avatar alt={user?.displayName} src={user?.photoURL} />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <Link href={"/auth/signin"}>
                    {" "}
                    <Button variant="outlined" color="error">
                      Sign In
                    </Button>
                  </Link>
                )}
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem disabled sx={{ fontSize: ".8rem" }}>
                    {user?.displayName}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      router.push("/dashboard/profile");
                    }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                </Menu>
              </div>
            </Container>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
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
      </nav>
    </Box>
  );
};

export default Navbar;