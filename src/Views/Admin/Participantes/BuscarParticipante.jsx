import React from "react";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";

const BuscarParticipante = (props) => {
  
  const searchFunction = (e) => {
    props.setSearch(e.target.value);
  };

  return (
    <div>
      <TextField
        sx={{ width: {xs: "100%", md: "50%"} }}
        placeholder="Buscar solicitud..."
        variant="outlined"
        size="small"
        onChange={searchFunction}
        value={props.search}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default BuscarParticipante;
