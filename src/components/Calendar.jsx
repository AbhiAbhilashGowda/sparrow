import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MonthCalendar from "./MonthCalendar";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Calendar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Header */}
      <Header />

      {/* SideBar */}
      <Sidebar />

      {/* Calendar */}
      <div style={{ paddingTop: 65, backgroundColor: "#f5f5f5" }}>
        <div style={{ padding: 25 }}>
          <MonthCalendar />
        </div>
      </div>
    </Box>
  );
}
