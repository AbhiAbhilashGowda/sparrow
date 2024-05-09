import React from "react";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import { Avatar } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";

const Header = () => {
  const drawerWidth = 235;

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        style={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "0.5px solid #e6e3e3",
        }}
      >
        <Toolbar>
          {/* Search box */}
          <Box sx={{ width: "600px", display: "flex" }}>
            <input
              type="text"
              placeholder="Search..."
              style={{
                width: "100%",
                height: 40,
                borderRadius: 10,
                paddingLeft: 10,
                border: "none",
                outline: "none",
                backgroundColor: "#e6e3e3",
                opacity: 0.5,
              }}
            />
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1 }}
          />

          <div
            style={{
              padding: "5px 10px",
              borderRadius: 2,
              marginRight: 10,
              color: "gray",
              fontSize: 30,
            }}
          >
            <AddOutlinedIcon />
          </div>
          <div
            style={{
              padding: "5px 10px",
              borderRadius: 2,
              marginRight: 10,
              color: "gray",
              fontSize: 30,
            }}
          >
            <NotificationsOutlinedIcon />
          </div>

          {/* User profile */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#e6e3e3",
              padding: "5px 10px",
              borderRadius: 2,
            }}
          >
            <Avatar
              alt="User"
              src="/broken-image.jpg"
              sx={{ width: 32, height: 32 }}
            />
            <Typography
              variant="body1"
              sx={{ mr: 1 }}
              style={{ paddingLeft: 10, color: "grey" }}
            >
              Uziel Renta
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
