import React from "react";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import NavbarAdmin from "./NavbarAdmin";

const TopNavAdmin = ({ title = "Santana Suena" }) => {
  const [openDraw, setOpenDraw] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDraw(open);
  };

  return (
    <Box sx={{md: 2, display: "flex" , alignItems: "center"}}>
      <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2 }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={openDraw} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <NavbarAdmin />
          </Box>
        </Drawer>
      </Box>
      <Typography variant="h6">{title}</Typography>
      <Divider />
    </Box>
  );
};

export default TopNavAdmin;
