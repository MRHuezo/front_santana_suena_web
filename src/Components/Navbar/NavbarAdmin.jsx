import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Campaign,
  DomainAdd,
  EmojiEvents,
  EmojiPeople,
  // Handshake,
  Home,
  Logout,
  MarkEmailUnread,
  Menu,
  //PostAdd,
} from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { MainContext } from "../../Context/MainCtx";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
      height: 30,
      width: 30,
    },
    children: `${name.split(" ")[0][0]}`,
  };
}


const NavbarAdmin = () => {
  const { user } = useContext(MainContext);
  const usuario = user.user ? user.user.split(" ")[0] : "";

  const handleCloseSesion = () => {
    localStorage.removeItem("tokenSS");
    window.location.reload();
  };
  
  return (
    <Box sx={{ width: "100%" }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemIcon>
              <Avatar {...stringAvatar(user.user)} />
            </ListItemIcon>
            <ListItemText primary={<Typography noWrap>{usuario}</Typography>} secondary={user.id_sede.name} />
            <IconButton sx={{ display: { xs: "flex", md: "none" } }} variant="body2" color="text.secondary">
              <Menu />
            </IconButton>
          </ListItem>
          {user.rol === "FIRST"  ? (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/solicitudes">
              <ListItemIcon>
                <MarkEmailUnread />
              </ListItemIcon>
              <ListItemText primary="Solicitudes" />
            </ListItemButton>
          </ListItem>
          ) : null}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/participantes">
              <ListItemIcon>
                <EmojiPeople />
              </ListItemIcon>
              <ListItemText primary="Participantes" />
            </ListItemButton>
          </ListItem>
          {/* {user.id_sede && user.id_sede.main ? ( */}
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/finalistas">
                <ListItemIcon>
                  <EmojiEvents />
                </ListItemIcon>
                <ListItemText primary="Finalistas" />
              </ListItemButton>
            </ListItem>
          {/* ) : null} */}
          {user.id_sede && user.id_sede.main ? (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/sedes">
                <ListItemIcon>
                  <DomainAdd />
                </ListItemIcon>
                <ListItemText primary="Sedes" />
              </ListItemButton>
            </ListItem>
          ) : null}

          {/* <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/publicaciones">
              <ListItemIcon>
                <PostAdd />
              </ListItemIcon>
              <ListItemText primary="Publicaciones" />
            </ListItemButton>
          </ListItem> */}
          {/* <ListItem disablePadding>
            <ListItemButton component={Link} to="/admin/patrocinadores">
              <ListItemIcon>
                <Handshake />
              </ListItemIcon>
              <ListItemText primary="Patrocinadores" />
            </ListItemButton>
          </ListItem> */}
          {user.id_sede && user.id_sede.main ? (
            <ListItem disablePadding>
              <ListItemButton component={Link} to="/admin/comunicados">
                <ListItemIcon>
                  <Campaign />
                </ListItemIcon>
                <ListItemText primary="Comunicados" />
              </ListItemButton>
            </ListItem>
          ) : null}
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleCloseSesion}>
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
