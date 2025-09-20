import Banner from "@/components/home/Banner";
import Content from "@/components/home/Content";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <Banner />
      <Content />
    </Box>
  );
}
