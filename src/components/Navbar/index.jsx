import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import logo from './../../assets/logo.png'
import Image from "next/image";
import Button from '@mui/material/Button';

const drawerWidth = 260;
const navItems = [
  { name: "Home", route: "/" },
  { name: "All Classes", route: "/allclasses" },
  { name: "Teach on Phero", route: "/teachonphero" },
];

function Navbar(props) {
const router = useRouter()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", backgroundColor:'black', height:'100vh' }}>
    <Image
      src={logo}
      width={'100%'}
      height={100}
      alt="logo"
    />
      <Divider />
      <List>
      {navItems.map((item) => (
  <ListItem key={item.name} disablePadding>
    <ListItemButton sx={{ textAlign: "center", display: 'inline' }}>
{router.pathname === item.route ? <Link href={item.route} className="nav-link active">
        <ListItemText primary={item.name} sx={{ color: 'whitesmoke',backgroundColor: 'red', textDecoration: 'none', padding:'.4rem', borderRadius:'.3rem' }} />
      </Link> : <Link href={item.route} className="nav-link">
        <ListItemText primary={item.name} sx={{ color: 'whitesmoke', textDecoration: 'none' }} />
      </Link> }
    </ListItemButton>
  </ListItem>
))}

      </List>
      <Button variant="outlined" color="error">Sign In</Button>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", justifyContent:'space-between' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{bgColor: 'black'}}>
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
    <Image
      src={logo}
      width={230}
      height={100}
      alt="logo"
    />
  </Typography>
  <Box sx={{ display: { xs: "none", sm: "flex" }, justifyContent:'center' }}>
  {navItems.map((item) => (
  <ListItem key={item.name} disablePadding>
    <ListItemButton sx={{ textAlign: "center", display: 'inline' }}>
{router.pathname === item.route ? <Link href={item.route} className="nav-link active">
        <ListItemText primary={item.name} sx={{ color: 'whitesmoke',backgroundColor: 'red', textDecoration: 'none', padding:'.4rem', borderRadius:'.3rem' }} />
      </Link> : <Link href={item.route} className="nav-link" sx={{textDecoration: 'none'}}>
        <ListItemText primary={item.name} sx={{ color: 'whitesmoke', textDecoration: 'none' }} />
      </Link> }
    </ListItemButton>
  </ListItem>
))}

</Box>
<Button variant="outlined" color="error">Sign In</Button>
</Toolbar>
</Container>


      </AppBar>
      <nav sx={{bgColor: 'gray'}}>
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
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
