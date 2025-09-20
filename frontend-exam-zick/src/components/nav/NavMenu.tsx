"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Logo from "../../../public/images/logo.png";
import ContactForm from "../contactform/ContactForm";

interface PageLink {
  id: number;
  linkto: string;
  name: string;
  highlight?: boolean;
}

const pageLink: PageLink[] = [
  { id: 1, linkto: "/", name: "Tentang OLE777" },
  { id: 2, linkto: "/commission", name: "Komisi" },
  { id: 3, linkto: "/regulation", name: "Peraturan" },
  { id: 4, linkto: "/qa", name: "Pertanyaan & Jawaban" },
  {
    id: 6,
    linkto: "#", // no redirect
    name: "OLE777 Official",
    highlight: true,
  },
];

function NavMenu() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const [openContact, setOpenContact] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  /** MOBILE Drawer with List */
  const drawer = (
    <Fade in={mobileOpen} timeout={300}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bgcolor: "#003580",
          color: "#fff",
          zIndex: 1300,
          minHeight: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Header with logo + close button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 2,
            backgroundColor: "#021A4D",
          }}
        >
          <Image src={Logo} alt="Logo" width={160} height={40} />
          <IconButton onClick={handleDrawerToggle} sx={{ color: "#fff" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Menu List */}
        <List>
          {pageLink.map((item) => {
            const isActive = pathname === item.linkto;

            // Special case for OLE777 Official in mobile
            if (item.highlight) {
              return (
                <ListItem key={item.id} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      setOpenContact(true);
                      setMobileOpen(false);
                    }}
                    sx={{
                      px: 3,
                      py: 2,
                      bgcolor: isActive ? "#022a6b" : "transparent",
                      "&:hover": { bgcolor: "#022a6b" },
                    }}
                  >
                    <ListItemText
                      primary={item.name}
                      primaryTypographyProps={{
                        sx: {
                          color: "#FFB800",
                          fontWeight: "bold",
                        },
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            }

            // Default items
            return (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  component={Link}
                  href={item.linkto}
                  onClick={handleDrawerToggle}
                  sx={{
                    px: 3,
                    py: 2,
                    bgcolor: isActive ? "#022a6b" : "transparent",
                    "&:hover": { bgcolor: "#022a6b" },
                  }}
                >
                  <ListItemText
                    primary={item.name}
                    primaryTypographyProps={{
                      sx: {
                        color: isActive ? "#FFB800" : "#fff",
                        fontWeight: isActive ? "bold" : "normal",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}

          {/* Login + Register */}
          <ListItem disablePadding sx={{ px: 3, mt: 2 }}>
            <ListItemButton
              component={Link}
              href="/login"
              onClick={handleDrawerToggle}
              sx={{ "&:hover": { bgcolor: "#022a6b" } }}
            >
              <ListItemText
                primary="Login"
                primaryTypographyProps={{
                  sx: { color: "#fff", fontWeight: "normal" },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ px: 3 }}>
            <ListItemButton
              component={Link}
              href="/register"
              onClick={handleDrawerToggle}
              sx={{ "&:hover": { bgcolor: "#022a6b" } }}
            >
              <ListItemText
                primary="Register now"
                primaryTypographyProps={{
                  sx: { color: "#FFB800", fontWeight: "bold" },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Fade>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Top bar */}
      <AppBar
        position="static"
        sx={{ backgroundColor: "#021A4D", boxShadow: "none" }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: "space-between", height: "82px" }}>
            {/* Logo */}
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <Link href="/">
                <Image src={Logo} alt="Logo" width={371} height={42} />
              </Link>
            </Box>

            {/* Desktop Buttons */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 1,
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                href="/login"
                variant="contained"
                sx={{
                  bgcolor: "#999999",
                  color: "#fff",
                  "&:hover": { bgcolor: "#bbb" },
                  textTransform: "none",
                  borderRadius: "5px",
                  height: "40px",
                  px: 2,
                }}
              >
                Login
              </Button>
              <Button
                component={Link}
                href="/register"
                variant="contained"
                sx={{
                  bgcolor: "#FF7D00",
                  color: "#fff",
                  "&:hover": { bgcolor: "#FAA41D" },
                  textTransform: "none",
                  borderRadius: "5px",
                  height: "40px",
                  px: 2,
                }}
              >
                Register now
              </Button>
            </Box>

            {/* Mobile Menu Icon */}
            <IconButton
              color="inherit"
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Bottom bar */}
      <AppBar
        position="static"
        sx={{
          boxShadow: "none",
          height: "40px",
          backgroundColor: "#003580",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "flex-start",
              height: "40px",
              minHeight: "40px !important",
              px: 0,
            }}
          >
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 8 }}>
              {pageLink.map((item) => {
                const isActive = pathname === item.linkto;

                // Desktop special case
                if (item.highlight) {
                  return (
                    <Button
                      key={item.id}
                      onClick={() => setOpenContact(true)}
                      sx={{
                        justifyContent: "center",
                        color: "#001e5a",
                        bgcolor: "#faa41f",
                        borderRadius: "5px",
                        textTransform: "none",
                        fontWeight: "bold",
                        "&:hover": { bgcolor: "#e69500" },
                      }}
                    >
                      {item.name}
                    </Button>
                  );
                }

                // Default desktop buttons
                return (
                  <Button
                    key={item.id}
                    component={Link}
                    href={item.linkto}
                    sx={{
                      justifyContent: "center",
                      color: isActive ? "#FFB800" : "#fff",
                      bgcolor: "transparent",
                      borderRadius: "5px",
                      textTransform: "none",
                      fontWeight: isActive ? "bold" : "normal",
                      "&:hover": { color: "#FFB800" },
                    }}
                  >
                    {item.name}
                  </Button>
                );
              })}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && drawer}

      {/* Contact Form Popup */}
      <ContactForm open={openContact} onClose={() => setOpenContact(false)} />
    </Box>
  );
}

export default NavMenu;
