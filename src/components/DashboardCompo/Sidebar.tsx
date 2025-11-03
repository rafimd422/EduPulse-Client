import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";
import loading from "../../assets/Loading/loading.json";
import dynamic from "next/dynamic";

const drawerWidth = 240;

interface AppBarProps {
  open?: boolean;
}

interface NavItem {
  name: string;
  route: string;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Sidebar(): React.JSX.Element {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const isActiveRoute = router.pathname;

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const StudentMenu: NavItem[] = [
    { name: "Profile", route: "/dashboard/profile" },
    { name: "My Enroll Class", route: "/dashboard/student/enrollclass" },
    { name: "Back to Home", route: "/" },
  ];

  const TeacherMenu: NavItem[] = [
    { name: "Profile", route: "/dashboard/profile" },

    { name: "Add class", route: "/dashboard/teacher/addclass" },
    { name: "My class", route: "/dashboard/teacher/myclass" },
    { name: "Back to Home", route: "/" },
  ];
  const AdminMenu: NavItem[] = [
    { name: "Profile", route: "/dashboard/profile" },
    { name: "Teacher Request", route: "/dashboard/admin/teacherrequest" },
    { name: "Users", route: "/dashboard/admin/users" },
    { name: "All Classes", route: "/dashboard/admin/allclasses" },
    { name: "Back to Home", route: "/" },
  ];

  const { currentUser, refetch, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={loading} />
      </Container>
    );
  }

  const userRole: string | undefined = currentUser?.[0]?.role;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Container maxWidth="lg">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography>Dashboard</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* Student */}
        <List>
          {userRole === "student" &&
            StudentMenu.map((item, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                href={item?.route || ""}
                key={index}
              >
                <ListItem
                  disablePadding
                  sx={{
                    ...(isActiveRoute === item?.route && {
                      backgroundColor: "red",
                      color: "white",
                    }),
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
        <List>
          {userRole === "Teacher" &&
            TeacherMenu.map((item, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                href={item?.route || ""}
                key={index}
              >
                <ListItem
                  disablePadding
                  sx={{
                    ...(isActiveRoute === item?.route && {
                      backgroundColor: "red",
                      color: "white",
                    }),
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
        <Divider />
        {/* Admin */}
        <List>
          {userRole === "admin" &&
            AdminMenu.map((item, index) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontWeight: "bold",
                }}
                href={item?.route || ""}
                key={index}
              >
                <ListItem
                  disablePadding
                  sx={{
                    ...(isActiveRoute === item?.route && {
                      backgroundColor: "red",
                      color: "white",
                    }),
                  }}
                >
                  <ListItemButton>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
        </List>
      </Drawer>
    </Box>
  );
}
