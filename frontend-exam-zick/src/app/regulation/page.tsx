"use client";

import { useEffect, useState } from "react";
import { Container, Box, Paper, Tabs, Tab, Typography } from "@mui/material";

interface ApiData {
  id: number;
  title: string;
  content: string;
}

export default function RegulationPage() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState<ApiData[]>([]);

  useEffect(() => {
    fetch("https://dev-exam.777tech.me/senior_level/api/peraturan")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching regulation data:", err));
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
        <Tab label="Ketentuan dan Peraturan" />
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
        {tab === 0 && (
          <Box>
            {data.length > 0 ? (
              data.map((item) => (
                <Box key={item.id}>
                  <Box
                    sx={{
                      "& h3": {
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginTop: "1.5rem",
                        marginBottom: "0.8rem",
                        fontFamily: "Open Sans, sans-serif",
                      },
                      "& p": {
                        marginBottom: "1rem",
                        fontSize: "1rem",
                        fontFamily: "Open Sans, sans-serif",
                      },
                      "& ol": {
                        paddingLeft: "1.2rem",
                        marginTop: "0.8rem",
                        marginBottom: "1.5rem",
                      },
                      "& li": {
                        marginBottom: "0.5rem",
                        fontSize: "1rem",
                      },
                      "& .make-bold": {
                        fontWeight: "bold",
                      },
                    }}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </Box>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </Box>
        )}
      </Paper>
    </Container>
  );
}
