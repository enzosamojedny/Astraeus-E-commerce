import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import CartWidget from "./CartWidget";
import "./index.css"

const navItems = [
    { name: 'Men clothes', route: '/category/mens%20clothing' },
    { name: 'Women clothes', route: '/category/womens%20clothing' },
    { name: 'Electronics', route: '/category/electronics' },
    { name: 'Jewelry', route: '/category/jewelry' }
];
function DrawerAppBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Divider />
        <List>
            {navItems.map((item) => (
                <ListItem key={item.name} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <NavLink to={item.route}>
                            <Button
                                size="medium"
                                style={{
                                    color: "#000000",
                                    marginRight: 50,
                                    backgroundColor: "white",
                                    fontWeight: 600,
                                }}
                            >
                                {item.name}
                            </Button>
                        </NavLink>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
    return (
        <Box sx={{ display: 'flex', marginTop: 10 }}>
            <CssBaseline />
            <AppBar component="nav" style={{ backgroundColor: '#172738' }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <NavLink to="/">
                        <img
                            style={{ width: 120, height: 65 }}
                            className="image"
                            src={"/workpls.png"}
                            alt=""
                        />
                    </NavLink>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <NavLink key={item.name} to={item.route}>
                                <Button
                                    size="medium"
                                    style={{
                                        color: "white",
                                        marginRight: 50,
                                        backgroundColor: "#172738",
                                        fontWeight: 600,
                                        fontSize: 15,
                                        padding: 20
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </NavLink>
                        ))}
                    </Box>
                    <CartWidget />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default DrawerAppBar;
