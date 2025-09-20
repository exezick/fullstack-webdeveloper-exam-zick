"use client";

import { useEffect, useState } from "react";
import { Container, Box, Paper, Tabs, Tab } from "@mui/material";

interface QaData {
  id: number;
  title: string;
  content: string;
}

export default function Qa() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState<QaData[]>([]);

  useEffect(() => {
    fetch("https://dev-exam.777tech.me/senior_level/api/pertanyaanAndJawaban")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching Q&A data:", err));
  }, []);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container sx={{ py: 5, fontFamily: "Open Sans, sans-serif" }}>
      {/* Tabs */}
      <Tabs
        value={tab}
        onChange={handleChange}
        TabIndicatorProps={{ style: { display: "none" } }}
        sx={{
          mb: 0,
          "& .MuiTab-root": {
            textTransform: "none",
            fontWeight: "bold",
            borderRadius: "6px 6px 0 0",
            px: 3,
            py: 1.5,
            mr: 1,
            minHeight: "unset",
            fontFamily: "Open Sans, sans-serif",
          },
          "& .Mui-selected": {
            backgroundColor: "#FF7D00",
            color: "#fff !important",
          },
          "& .MuiTab-root:not(.Mui-selected)": {
            backgroundColor: "#002B6B",
            color: "#fff",
          },
        }}
      >
        {data.map((item) => (
          <Tab key={item.id} label={item.title} />
        ))}
      </Tabs>

      {/* Content Card */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: "0 6px 6px 6px",
          mt: 0,
          p: 4,
          backgroundColor: "#fff",
          marginTop: "-0.4rem",
          marginBottom: "4rem",
          lineHeight: 1.7,
          fontFamily: "Open Sans, sans-serif",
        }}
      >
        {data.length > 0 ? (
          <Box
            sx={{
              "& h3": {
                fontSize: "1.4rem",
                fontWeight: "bold",
                marginBottom: "1.2rem",
              },
              "& ol": {
                paddingLeft: "1.2rem",
                marginBottom: "1.5rem",
              },
              "& li": {
                marginBottom: "1.2rem",
              },
              "& .make-bold": {
                fontWeight: "bold",
              },

              /* Arrow process boxes */
              "& .pointer-process": {
                display: "flex",
                flexWrap: "wrap",
                gap: "0.8rem",
                marginTop: "1.2rem",
              },
              "& .pointer": {
                background: "#002B6B",
                color: "#fff",
                padding: "0.6rem 1.2rem",
                borderRadius: "2px",
                fontWeight: "bold",
                clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
                fontSize: "0.95rem",
                minWidth: "220px",
                textAlign: "center",
              },
              "& .pointer-alt": {
                background: "#FF7D00 !important",
              },
            }}
            dangerouslySetInnerHTML={{ __html: data[tab]?.content }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </Paper>
    </Container>
  );
}
