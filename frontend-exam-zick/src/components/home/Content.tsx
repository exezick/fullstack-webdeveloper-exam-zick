"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";

// Use same names as file names
import imgGroup from "../../../public/images/home/img-group.svg";
import imgDomino from "../../../public/images/home/img-domino.svg";
import imgDocument from "../../../public/images/home/img-document.svg";
import imgSettings from "../../../public/images/home/img-settings.svg";

// Import images properly for Next.js
import imgCta1 from "../../../public/images/home/img-cta-1.jpg";
import imgCta2 from "../../../public/images/home/img-cta-2.jpg";
import imgCta3 from "../../../public/images/home/img-cta-3.jpg";

function Content() {
  const topFeatures = [{ img: imgCta3 }, { img: imgCta2 }, { img: imgCta1 }];

  const steps = [
    "Register by clicking the 'Register Now' button or via the link provided by our team.",
    "Register",
    "Share the special link you got from your account.",
    "You can share the link through your social media accounts, such as Facebook, Instagram, YouTube, Twitter, and others.",
  ];

  const bottomFeatures = [
    {
      icon: imgGroup,
      title: "Professional Payment Team",
      desc: "We offer a variety of reliable payment methods. Every player’s funds are safe and secure.",
    },
    {
      icon: imgDomino,
      title: "Famous Brand",
      desc: "An incredible marketing budget. Let you enjoy the effects of a quality brand.",
    },
    {
      icon: imgDocument,
      title: "Professional Reporting System",
      desc: "Neat & clean reporting format. View daily & monthly reports in one place.",
    },
    {
      icon: imgSettings,
      title: "Personalize Your Personal Package",
      desc: "We can customize a special promotion just for you. Making your promotion easy.",
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container maxWidth="lg">
        {/* Top Features as Images */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 3,
            mb: 6,
          }}
        >
          {topFeatures.map((item, idx) => (
            <Box
              key={idx}
              sx={{
                flex: "1 1 280px",
                maxWidth: "350px",
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <Image
                src={item.img}
                alt={`Top Feature ${idx + 1}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Box>
          ))}
        </Box>
      </Container>

      {/* Full Width Grey Section */}
      <Box sx={{ backgroundColor: "rgba(0, 0, 0, 0.1)", width: "100%", py: 7 }}>
        <Container maxWidth="lg">
          {/* Description */}
          <Typography
            variant="body2"
            sx={{ mb: 3, lineHeight: 1.7, color: "#505050", fontSize: "16px" }}
          >
            <strong>Kongsi OLE777</strong> is an OLE777 Affiliate football
            program that provides members and non-members with income through
            the OLE777 platform. Established in 2014, OLE777 provides online
            entertainment with convenience, quality products, excellent customer
            service, and benefits for all players and Kongsi OLE777 Affiliate
            Football members.
          </Typography>

          {/* Steps */}
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", mb: 3, color: "#505050" }}
          >
            Steps to get commission by becoming an OLE777 Member:
          </Typography>
          <Box component="ol" sx={{ listStyle: "none", pl: 0, mb: 6 }}>
            {steps.map((step, idx) => (
              <Box
                key={idx}
                sx={{ display: "flex", alignItems: "flex-start", mb: 2 }}
              >
                {/* Orange Number Badge */}
                <Box
                  sx={{
                    backgroundColor: "#FFB800",
                    color: "#fff",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1.5,
                    fontSize: "14px",
                  }}
                >
                  {idx + 1}.
                </Box>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1.6, color: "#505050", fontSize: "15px" }}
                >
                  {step}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Bottom Features */}
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 4,
              mt: 10,
            }}
          >
            {bottomFeatures.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  flex: "1 1 200px",
                  maxWidth: "250px",
                  textAlign: "center",
                  px: 2,
                }}
              >
                <Image src={item.icon} alt={item.title} height={100} />
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    mt: 2,
                    color: "#505050",
                    fontSize: "16px",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "#555", lineHeight: 1.6 }}
                >
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Content;
