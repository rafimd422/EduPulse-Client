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
import ListItemIcon from "@mui/material/ListItemIcon";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";
import loading from "../../assets/Loading/loading.json";
import dynamic from "next/dynamic";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import ClassRoundedIcon from "@mui/icons-material/ClassRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuBookRoundedIcon from "@mui/icons-material/MenuBookRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { adminAccent, adminAccentDark } from "./adminPanelStyles";

const drawerWidth = 280;

interface AppBarProps {
  open?: boolean;
}

interface NavItem {
  name: string;
  route: string;
  icon: React.ElementType;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  color: "#101828",
  backgroundColor: "rgba(255, 255, 255, 0.84)",
  borderBottom: "1px solid rgba(16, 24, 40, 0.08)",
  boxShadow: "0 10px 34px rgba(16, 24, 40, 0.08)",
  backdropFilter: "blur(18px)",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1.5),
  padding: theme.spacing(1.5, 1, 2),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
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
    { name: "Profile", route: "/dashboard/profile", icon: AccountCircleRoundedIcon },
    {
      name: "My Enroll Class",
      route: "/dashboard/student/enrollclass",
      icon: MenuBookRoundedIcon,
    },
    { name: "Back to Home", route: "/", icon: HomeRoundedIcon },
  ];

  const TeacherMenu: NavItem[] = [
    { name: "Profile", route: "/dashboard/profile", icon: AccountCircleRoundedIcon },

    {
      name: "Add class",
      route: "/dashboard/teacher/addclass",
      icon: AddCircleOutlineRoundedIcon,
    },
    { name: "My class", route: "/dashboard/teacher/myclass", icon: ClassRoundedIcon },
    { name: "Back to Home", route: "/", icon: HomeRoundedIcon },
  ];
  const AdminMenu: NavItem[] = [
    { name: "Profile", route: "/dashboard/profile", icon: AccountCircleRoundedIcon },
    {
      name: "Teacher Request",
      route: "/dashboard/admin/teacherrequest",
      icon: AssignmentTurnedInRoundedIcon,
    },
    { name: "Users", route: "/dashboard/admin/users", icon: GroupsRoundedIcon },
    {
      name: "All Classes",
      route: "/dashboard/admin/allclasses",
      icon: SchoolRoundedIcon,
    },
    { name: "Back to Home", route: "/", icon: ArrowBackRoundedIcon },
  ];

  const { currentUser, isLoading } = useCurrentUser();

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
  const visibleMenu =
    userRole === "admin"
      ? AdminMenu
      : userRole === "Teacher"
      ? TeacherMenu
      : userRole === "student"
      ? StudentMenu
      : [];
  const activeItem = visibleMenu.find((item) => item.route === isActiveRoute);
  const profileName = currentUser?.[0]?.name || "EduPulse Admin";
  const profileEmail = currentUser?.[0]?.email || userRole || "Dashboard";
  const profileImage = currentUser?.[0]?.image;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar
          sx={{
            minHeight: { xs: 68, md: 76 },
            px: { xs: 2, sm: 3 },
            gap: 2,
            justifyContent: "space-between",
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1.5} minWidth={0}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                width: 42,
                height: 42,
                border: "1px solid rgba(16, 24, 40, 0.1)",
                backgroundColor: "#fff",
                boxShadow: "0 8px 20px rgba(16, 24, 40, 0.08)",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Box minWidth={0}>
              <Typography
                sx={{
                  color: adminAccent,
                  fontSize: "0.76rem",
                  fontWeight: 900,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Dashboard
              </Typography>
              <Typography
                noWrap
                sx={{
                  color: "#101828",
                  fontSize: { xs: "1.05rem", md: "1.22rem" },
                  fontWeight: 900,
                  lineHeight: 1.2,
                }}
              >
                {activeItem?.name || "Overview"}
              </Typography>
            </Box>
          </Stack>
          <Stack direction="row" spacing={1.25} alignItems="center" minWidth={0}>
            <Avatar
              src={profileImage}
              sx={{
                width: 42,
                height: 42,
                border: "2px solid #fff",
                boxShadow: "0 8px 20px rgba(16, 24, 40, 0.12)",
              }}
            >
              {profileName.charAt(0)}
            </Avatar>
            <Box sx={{ display: { xs: "none", sm: "block" }, minWidth: 0 }}>
              <Typography
                noWrap
                sx={{ color: "#101828", fontSize: "0.9rem", fontWeight: 900 }}
              >
                {profileName}
              </Typography>
              <Typography
                noWrap
                sx={{ color: "#667085", fontSize: "0.78rem", fontWeight: 700 }}
              >
                {profileEmail}
              </Typography>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: open ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            p: 2,
            border: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(249,250,251,0.96))",
            boxShadow: "18px 0 50px rgba(16, 24, 40, 0.08)",
            display: "flex",
            overflowX: "hidden",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Stack direction="row" spacing={1.25} alignItems="center" minWidth={0}>
            <Box
              sx={{
                display: "grid",
                placeItems: "center",
                width: 42,
                height: 42,
                flex: "0 0 auto",
                borderRadius: "14px",
                color: "#fff",
                background: `linear-gradient(135deg, ${adminAccent}, ${adminAccentDark})`,
                boxShadow: "0 12px 26px rgba(217, 45, 32, 0.22)",
              }}
            >
              <DashboardRoundedIcon fontSize="small" />
            </Box>
            <Box minWidth={0}>
              <Typography
                noWrap
                sx={{ color: "#101828", fontWeight: 900, fontSize: "1rem" }}
              >
                EduPulse
              </Typography>
              <Typography
                noWrap
                sx={{ color: "#667085", fontWeight: 700, fontSize: "0.75rem" }}
              >
                Admin panel
              </Typography>
            </Box>
          </Stack>
          <IconButton
            onClick={handleDrawerClose}
            sx={{
              width: 38,
              height: 38,
              border: "1px solid rgba(16, 24, 40, 0.08)",
              backgroundColor: "#fff",
            }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider sx={{ borderColor: "rgba(16, 24, 40, 0.08)" }} />
        <List sx={{ py: 1.5, flex: 1 }}>
          {visibleMenu.map((item) => {
            const Icon = item.icon;
            const isActive = isActiveRoute === item.route;

            return (
              <Link
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "inherit",
                }}
                href={item?.route || ""}
                key={item.route}
              >
                <ListItem disablePadding sx={{ mb: 0.75 }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      borderRadius: "16px",
                      color: isActive ? "#fff" : "#344054",
                      background: isActive
                        ? `linear-gradient(135deg, ${adminAccent}, ${adminAccentDark})`
                        : "transparent",
                      boxShadow: isActive
                        ? "0 12px 26px rgba(217, 45, 32, 0.22)"
                        : "none",
                      "&:hover": {
                        color: isActive ? "#fff" : adminAccent,
                        background: isActive
                          ? `linear-gradient(135deg, ${adminAccent}, ${adminAccentDark})`
                          : "#fff5f4",
                      },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 38,
                        color: "inherit",
                        "& svg": { fontSize: 21 },
                      }}
                    >
                      <Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        fontSize: "0.94rem",
                        fontWeight: 850,
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              </Link>
            );
          })}
        </List>
        <Box
          sx={{
            mt: "auto",
            p: 1.25,
            borderRadius: "18px",
            border: "1px solid rgba(16, 24, 40, 0.08)",
            backgroundColor: "#fff",
            boxShadow: "0 12px 28px rgba(16, 24, 40, 0.06)",
          }}
        >
          <Stack direction="row" spacing={1.25} alignItems="center" minWidth={0}>
            <Avatar src={profileImage} sx={{ width: 42, height: 42 }}>
              {profileName.charAt(0)}
            </Avatar>
            <Box minWidth={0}>
              <Typography
                noWrap
                sx={{ color: "#101828", fontSize: "0.9rem", fontWeight: 900 }}
              >
                {profileName}
              </Typography>
              <Typography
                noWrap
                sx={{ color: "#667085", fontSize: "0.76rem", fontWeight: 700 }}
              >
                {userRole || "Dashboard"}
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Drawer>
    </Box>
  );
}
