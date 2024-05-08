"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { FiAlignLeft } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar({ options }: { options: Array<string> }) {
  const pages = options.reduce(
    (acc, curr) => {
      return {
        ...acc,
        [curr]: `/${
          curr.toLowerCase() == "home"
            ? "/"
            : curr.toLowerCase() == "contact"
            ? "/#contact"
            : curr.toLowerCase()
        }`,
      };
    },
    options.length ? {} : { "": "/" }
  );

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (link: string) => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <AppBar
          position="fixed"
          sx={{
            width: { xs: "75%", md: "60%" },
            borderRadius: "40px",
            marginTop: "2%",
            marginRight: {
              xs: "10%",
              md: "22%",
              backgroundColor: "white",
              color: "black",
            },
          }}
        >
          <Container maxWidth="xl">
            <Toolbar>
              {/* <AdbIcon  /> */}
              {/* <FiAlignLeft style={{ display: (window.innerWidth < 768) ? "none" : "flex", marginRight: 1 }} /> */}

              <Image
                className="hidden md:flex"
                src="/logo.jpg"
                alt="hh"
                height={50}
                width={50}
              />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                  display: { xs: "none", md: "flex" },
                }}
              >
                SMYS
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "flex",
                    justifyContent: "flex-start",
                    md: "none",
                  },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  {/* <MenuIcon /> */}
                  <FiAlignLeft />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  {Object.entries(pages).map(([key, value]) => (
                    <MenuItem key={key}>
                      <Typography textAlign="center" sx={{ color: "black" }}>
                        <Link href={value}>{key}</Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 0 }} /> */}
              {/* <FiAlignLeft style={{ display: (window.innerWidth < 768) ? "none" : "flex", marginRight: 1 }} />  */}
              <Image
                className="flex md:hidden"
                src="/logo.jpg"
                alt="img"
                height={40}
                width={40}
              />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                SMYS
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: {
                    xs: "none",
                    md: "flex",
                    justifyContent: "flex-end",
                    gap: "20px",
                    marginRight: "10%",
                  },
                }}
              >
                {Object.entries(pages).map(([key, value]) => (
                  <Button
                    key={key}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    <Link href={value}>{key}</Link>
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
    </div>
  );
}
export default Navbar;
