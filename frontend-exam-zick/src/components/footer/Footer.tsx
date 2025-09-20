"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

// Contact Icons
import WhatsAppIcon from "../../../public/images/footer/icon-whatsapp.svg";
import EmailIcon from "../../../public/images/footer/icon-email.svg";
import SkypeIcon from "../../../public/images/footer/icon-skype.svg";

// Logos
import ChelseaLogo from "../../../public/images/footer/logo-chelsea.svg";
import IsleManLogo from "../../../public/images/footer/logo-iom.png";
import OLE777Logo from "../../../public/images/footer/ole777-white.png";

// adds
import Adds from "../../../public/images/footer/adds.gif";

function Footer() {
  const contactItems = [
    {
      icon: SkypeIcon,
      alt: "Skype",
      width: 30,
      height: 30,
      label: "Skype Customer Service:",
      value: "affiliasi.id@oleintl.com",
    },
    {
      icon: EmailIcon,
      alt: "Email",
      width: 30,
      height: 23,
      label: "Email:",
      value: "Ole777aff01@gmail.com",
    },
    {
      icon: WhatsAppIcon,
      alt: "WhatsApp",
      width: 30,
      height: 30,
      label: "Whatsapp:",
      value: "+6283162732012",
    },
  ];

  return (
    <Box component="footer" sx={{ mt: "-3rem", pt: 0 }}>
      {/* Adds section */}
      <Container sx={{ py: 3, px: 3, textAlign: "center" }} maxWidth="lg">
        <Link
          href="https://bit.ly/stikerdownload"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={Adds}
            alt="Adds"
            style={{ maxWidth: "100%", height: "auto", cursor: "pointer" }}
          />
        </Link>
      </Container>

      {/* Top Contact Bar */}
      <Box sx={{ backgroundColor: "#004080", color: "#fff", py: 1 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            fontSize: "15px",
            padding: 2,
            gap: 3,
            textAlign: "center",
          }}
        >
          {contactItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flex: "1 1 auto",
                justifyContent: "center",
              }}
            >
              <Image
                src={item.icon}
                alt={item.alt}
                width={item.width}
                height={item.height}
              />
              <Typography
                variant="body2"
                component="span"
                sx={{ fontSize: "15px" }}
              >
                {item.label}{" "}
                <Typography
                  component="span"
                  sx={{ color: "#FFB800", fontSize: "15px" }}
                >
                  {item.value}
                </Typography>
              </Typography>
            </Box>
          ))}
        </Container>
      </Box>

      {/* Bottom Logo Section */}
      <Box sx={{ backgroundColor: "#002860", py: 3 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 4,
            textAlign: "center",
          }}
        >
          {/* Chelsea */}
          <Box sx={{ flex: "1 1 200px", textAlign: "center" }}>
            <Image
              src={ChelseaLogo}
              alt="Chelsea FC"
              style={{ height: "90px" }}
            />
          </Box>

          {/* Isle of Man */}
          <Box sx={{ flex: "1 1 200px", textAlign: "center" }}>
            <Image
              src={IsleManLogo}
              alt="Isle of Man"
              style={{ height: "90px" }}
            />
          </Box>

          {/* OLE777 */}
          <Box sx={{ flex: "1 1 200px", textAlign: "center" }}>
            <Image src={OLE777Logo} alt="OLE777" style={{ height: "48px" }} />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Footer;
