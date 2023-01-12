import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box"
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Campaign,
  EmojiEvents,
  EmojiPeople,
  Handshake,
  Home,
  Logout,
  MarkEmailUnread,
  PostAdd,
} from "@mui/icons-material";

const NavbarAdmin = () => {
  return (
    <Box sx={{ width: "100%"}}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/participantes">
              <ListItemIcon>
                <EmojiPeople />
              </ListItemIcon>
              <ListItemText primary="Participantes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/finalistas">
              <ListItemIcon>
                <EmojiEvents />
              </ListItemIcon>
              <ListItemText primary="Finalistas" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/publicaciones">
              <ListItemIcon>
                <PostAdd />
              </ListItemIcon>
              <ListItemText primary="Publicaciones" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/patrocinadores">
              <ListItemIcon>
                <Handshake />
              </ListItemIcon>
              <ListItemText primary="Patrocinadores" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/solicitudes">
              <ListItemIcon>
                <MarkEmailUnread />
              </ListItemIcon>
              <ListItemText primary="Solicitudes" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/comunicados">
              <ListItemIcon>
                <Campaign />
              </ListItemIcon>
              <ListItemText primary="Comunicados" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Salir" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
};

export default NavbarAdmin;
