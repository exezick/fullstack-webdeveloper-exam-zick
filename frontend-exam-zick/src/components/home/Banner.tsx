"use client";

import { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import Image from "next/image";

interface Slide {
  id: number;
  img: string;
  name: string;
  link: string;
}

function Banner() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  // Fetch slideshow data
  useEffect(() => {
    fetch("https://dev-exam.777tech.me/senior_level/api/homePage")
      .then((res) => res.json())
      .then((data) => setSlides(data.slideshow))
      .catch((err) => console.error("Error fetching slideshow:", err));
  }, []);

  // Auto play every 5s with fade effect
  useEffect(() => {
    if (slides.length === 0) return;

    const interval = setInterval(() => {
      setFade(false); // start fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true); // fade-in after image changes
      }, 400); // match transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [slides]);

  if (slides.length === 0) {
    return <p style={{ color: "#fff" }}>Loading banner...</p>;
  }

  const currentSlide = slides[currentIndex];

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: { xs: 300, md: 422 },
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Image with fade animation */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          opacity: fade ? 1 : 0,
          transition: "opacity 0.4s ease-in-out",
        }}
      >
        <Image
          src={currentSlide.img}
          alt={currentSlide.name}
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Content */}
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          color: "#fff",
          textAlign: "left",
          marginTop: { xs: 0, md: "-6rem" },
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "40px" },
            background: "linear-gradient(to top, #faa41f 0%, #FEF85A 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            paddingLeft: "1.2rem !important",
          }}
        >
          50% INSTANT AFFILIATE COMMISSION
        </Typography>

        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontWeight: "bold",
            color: "#FFF",
            fontSize: "30px",
            mt: 2,
            paddingLeft: "1.2rem !important",
          }}
        >
          INCREASE YOUR INCOME, <br /> Tempting Passive Income!
        </Typography>

        <Button
          variant="contained"
          href={currentSlide.link}
          sx={{
            mt: 3,
            bgcolor: "#FF7D00",
            "&:hover": { bgcolor: "#FAA41D" },
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "5px",
            px: 3,
            py: 1,
            marginLeft: "1.2rem !important",
          }}
        >
          Register Now
        </Button>
      </Container>

      {/* Navigation dots */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "8px",
          zIndex: 3,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#FF7D00" : "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Banner;
