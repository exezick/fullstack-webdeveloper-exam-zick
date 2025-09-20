"use client";

import { useEffect, useState } from "react";
import { Container, Box, Typography, Tabs, Tab, Paper } from "@mui/material";

interface ApiData {
  id: number;
  title: string;
  content: string;
}

export default function CommissionPage() {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState<ApiData[]>([]);

  useEffect(() => {
    fetch("https://dev-exam.777tech.me/senior_level/api/komisi")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error fetching commission data:", err));
  }, []);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  return (
    <Container sx={{ py: 5 }}>
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
        <Tab label="Commission System Details" />
        <Tab label="Payment Terms" />
      </Tabs>

      {/* Content Card */}
      <Paper
        elevation={3}
        sx={{
          borderRadius: "0 6px 6px 6px",
          mt: 0,
          p: 3,
          backgroundColor: "#fff",
          marginTop: "-0.4rem",
          marginBottom: "4rem",
          px: 6,
          pb: 5,
        }}
      >
        {/* Tab Panels */}
        {tab === 0 && (
          <Box>
            {data.length > 0 ? (
              data
                .filter((item) => item.id === 1)
                .map((item) => (
                  <Box key={item.id}>
                    <Box
                      sx={{ mt: 2 }}
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </Box>
                ))
            ) : (
              <p>Loading...</p>
            )}
          </Box>
        )}

        {tab === 1 && (
          <Box>
            {data.length > 0 ? (
              data
                .filter((item) => item.id === 2)
                .map((item) => (
                  <Box key={item.id}>
                    <Box
                      sx={{ mt: 2 }}
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
