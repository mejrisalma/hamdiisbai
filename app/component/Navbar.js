"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const NavItem = styled('a')({
  fontFamily: 'Andalus, sans-serif',
  fontSize: '40px',
  fontWeight: 400,
  lineHeight: '61.05px',
  color: '#140F41',
  '&:hover': {
    color: '#DFAF09',
  },
});

function Navbar(props) {
  const drawerWidth = 240;
  const routess = [
    { name: "الرئيسية", path: "/" },
    { name: "الخدمات", path: '/Service' },
    { name: "المقالات", path: '/blogs' },
    { name: "الاتصال", path: "/contactUs" },
  ];

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <div onClick={handleDrawerToggle} className="flex flex-col items-center justify-center gap-4 pt-10">
      <List className="flex flex-col justify-center items-center gap-4 mt-10">
        {routess.map((route, index) => (
          <Link key={index} href={route.path} passHref>
            <NavItem>{route.name}</NavItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div>
      <AppBar className="bg-[#FFFFFFE3] opacity-90 h-[98px]">
        <Toolbar className="bg-[#FFFFFFE3] h-[98px]">
          <div className="w-full hidden lg:flex items-center">
            {/* Left Side Items */}
            <div className="flex-1 flex items-center justify-end gap-8">
             
                <NavItem href={routess[0].path}>{routess[0].name}</NavItem>
             
         
                <NavItem  href={routess[1].path}>{routess[1].name}</NavItem>
             
            </div>
            
            {/* Centered Logo */}
            <div className="flex-shrink-0 mr-28 ml-28">
              <img src='/image/logo.png' alt='Logo' className='h-16' />
            </div>

            {/* Right Side Items */}
            <div className="flex-1 flex items-center justify-start gap-8">
              {routess.slice(2).map((route, index) => (
               
                  <NavItem key={index+2} href={route.path}>{route.name}</NavItem>
        
              ))}
            </div>
          </div>
          <div className="w-full  flex lg:hidden items-center justify-between " >
          <img src='/image/logo.png' alt='Logo' className='h-16' />
          <IconButton
          
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
          >
          <img
          src="/image/menu.svg"
          alt=""
          className="xl:hidden w-auto h-auto cursor-pointer z-50"
          />
          </IconButton>
          </div>
          </Toolbar>
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
            display: { xs: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main">
        <Toolbar />
      </Box>
    </div>
  );
}

export default Navbar;
