import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { MainContext } from "../../Context/MainCtx";
import { Link } from "react-router-dom";
import { ListItemIcon, ListItemText } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";

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

export default function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { user } = React.useContext(MainContext);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseSesion = () => {
    localStorage.removeItem("tokenSS");
    window.location.reload();
  };

  if (!user) return null;

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar {...stringAvatar(user.user)} />
      </IconButton>
      <Menu
        sx={{ mt: "25px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem component={Link} to="/admin">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <ListItemText>Panel</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleCloseSesion}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText>Salir</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
