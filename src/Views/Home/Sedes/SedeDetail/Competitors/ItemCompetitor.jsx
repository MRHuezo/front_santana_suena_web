import * as React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";

export default function ItemCompetitor({ data }) {
  const navigate = useNavigate();
  const name_array = data.name.split(" ");
  let name = `${name_array[0]}`;
  let id_name = `${name_array[0]}`.toLocaleLowerCase();

  if (name_array.length > 1) {
    name = `${name_array[0]} ${name_array[1]}`;
    id_name = `${name_array[0]}-${name_array[1]}`.toLocaleLowerCase();
  }

  return (
    <Box my={3} sx={{ cursor: "pointer" }} onClick={() => navigate(`/participante/${id_name}`)}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Avatar sx={{ width: 160, height: 160 }} src={data.photo} />
      </Box>
      <Typography style={{ fontSize: 20 }} align="center" noWrap>
        <strong>{name}</strong>
      </Typography>
    </Box>
  );
}
